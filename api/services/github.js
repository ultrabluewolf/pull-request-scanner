'use strict';

const Promise = require('bluebird');
const axios = require('axios');
const moment = require('moment');

const config = require('config');
const logger = require('../../config/logger')('github-service');

const hasNext = (data) => data.pageInfo.hasNextPage;
const getCursor = (data) => data.pageInfo.endCursor;

// Github service implemented using GraphQL API - see: https://developer.github.com/v4/

// calculates latency based on given start time
const emitLatencyOfQuery = (startTime, query, msg = 'request completed.') => {
  const endTime = moment();
  const metadata = { latency: endTime.diff(startTime), query };
  logger.info({ data: metadata }, msg);
  return metadata.latency;
};

// check for errors in the response and return body of response
const verifyResponse = (resp) => {
  if (!resp || !resp.data || !resp.data.data || !!resp.data.errors) {
    logger.error({ data: { statusCode: resp.statusCode, body: resp.data }}, 'request issue!');
    return Promise.reject(resp.data);
  }
  return Promise.resolve(resp.data);
};

// get all repos for an organization - encapsulates pagination
const fetchRepos = (organization, max = 100, perPage = 100, afterId = null, totalAcm = 0) => {
  const afterQuery = !!afterId ? `after:"${afterId}"` : '';

  const query = `query {
    organization(login: "${organization}") {
      name
      repositories(first:${perPage} ${afterQuery}){
        nodes {
          id
          name
          url
          owner {
            login
          }
        }
        pageInfo {
          hasNextPage
          startCursor
          hasPreviousPage
          endCursor
        }
      }
    }
  }`;

  logger.debug(query);

  const flattenEdgesAndNodes = (data) => {
    const results = Object.assign({}, data);
    results.organization.pageInfo = results.organization.repositories.pageInfo;
    results.organization.repositories = results.organization.repositories.nodes;
    return Promise.resolve(results);
  };

  const startTime = moment();
  return axios({
    url: config.get('github.url'),
    method: 'POST',
    headers: {
      authorization: `bearer ${config.get('github.key')}`,
      // accept: 'application/vnd.github.v4.idl', // show condensed schema
    },
    data: { query },
  })
  .then((resp) => {
    emitLatencyOfQuery(startTime);
    return Promise.resolve(resp);
  })
  .then((resp) => verifyResponse(resp))
  .then((data) => flattenEdgesAndNodes(data.data))
  .then((data) => {
    // recurse
    // TODO: more than the max specified could be returned, a subset of the result
    //       should be returned instead
    totalAcm += data.organization.repositories.length;
    if (totalAcm < max && hasNext(data.organization)) {
      return fetchRepos(organization, max, perPage, getCursor(data.organization), totalAcm)
        .then((extraData) => {
          data.organization.repositories = [].concat(data.organization.repositories, extraData.organization.repositories);
          data.organization.pageInfo = extraData.organization.pageInfo;
          return Promise.resolve(data);
        });
    }
    return Promise.resolve(data);
  });
};

// get all pull requests of a repo - encapsulates pagination
const fetchPullRequests = (name, owner, max = 100, perPage = 100, afterId = null, totalAcm = 0) => {
  const afterQuery = !!afterId ? `after:"${afterId}"` : '';

  const query = `query {
    repository(owner:"${owner}", name:"${name}"){
      name
      url
      pullRequests(first:${perPage} ${afterQuery}) {
        nodes {
          title
          state
          id
          number
          url
          bodyText
          createdAt
          lastEditedAt
          publishedAt
          closedAt
          mergedAt
          merged
          closed
          changedFiles
          additions
          deletions
          author {
            login
            url
          }
          commits(first: 100) {
            nodes {
              commit {
                committedDate
                message
                author {
                  user {
                    login
                    url
                  }
                }
              }
            }
          }
        }
        pageInfo {
          hasNextPage
          startCursor
          hasPreviousPage
          endCursor
        }
      }
    }
  }`;

  logger.debug(query);

  const flattenEdgesAndNodes = (data) => {
    const results = Object.assign({}, data);
    results.repository.pageInfo = results.repository.pullRequests.pageInfo;
    results.repository.pullRequests = results.repository.pullRequests.nodes;
    results.repository.pullRequests
      .map((pullRequest) => {
        pullRequest.commits = pullRequest.commits.nodes
          .map(({ commit }) => commit);
      });
    return results;
  };

  const startTime = moment();
  return axios({
    url: config.get('github.url'),
    method: 'POST',
    headers: {
      authorization: `bearer ${config.get('github.key')}`,
      // accept: 'application/vnd.github.v4.idl', // show condensed schema
    },
    data: { query },
  })
  .then((resp) => {
    emitLatencyOfQuery(startTime);
    return Promise.resolve(resp);
  })
  .then((resp) => verifyResponse(resp))
  .then((data) => flattenEdgesAndNodes(data.data))
  .then((data) => {
    // recurse
    // TODO: more than the max specified could be returned, a subset of the result
    //       should be returned instead
    totalAcm += data.repository.pullRequests.length;
    if (totalAcm < max && hasNext(data.repository)) {
      return fetchPullRequests(name, owner, max, perPage, getCursor(data.repository), totalAcm)
        .then((extraData) => {
          data.repository.pullRequests = [].concat(
            data.repository.pullRequests,
            extraData.repository.pullRequests
          );
          data.repository.pageInfo = extraData.repository.pageInfo;
          return Promise.resolve(data);
        });
    }
    return Promise.resolve(data);
  });
};

// combines requests for pull request fetching of repos
const fetchPullRequestsForRepos = (repos, max = 100, perPage = 100) => {
  const helper = (repo) => fetchPullRequests(repo.name, repo.owner.login, max, perPage);
  return Promise.map(repos, helper);
};

module.exports = {
  fetchRepos,
  fetchPullRequests,
  fetchPullRequestsForRepos,
};
