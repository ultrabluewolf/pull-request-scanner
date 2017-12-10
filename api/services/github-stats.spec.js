'use strict';

const assert = require('chai').assert;
const nock = require('nock');
const Promise = require('bluebird');
const config = require('config');

const mocks = require('../../test/mocks');

const github = require('./github');
const githubStats = require('./github-stats');

describe('github-stats-service', () => {

  describe('::getTotalPullRequestsFromResponses()', () => {

    it('should calculate pull request totals', () => {

      const orgs = Object.keys(mocks.pullrequests.responses);
      return Promise.each(orgs, (org) => {

        const repos = Object.keys(mocks.pullrequests.responses[org]);
        return Promise.map(repos, (repo) => {

          const mockResp = mocks.pullrequests.responses[org][repo];

          const scope = nock(config.get('github.url'))
            .post('')
            .reply(200, mockResp);

          return github.fetchPullRequests(repo, org);
        })
        .then((data) => githubStats.getTotalPullRequestsFromResponses(data))
        .then((data) => {
          assert.deepEqual(data, mocks.stats.expected.totals[org]);
        });
      });

    });

  });

  describe('::getAvgAndMedianDataForPullRequests()', () => {

    it('should calculate averages and medians for pull request stats', () => {

      const orgs = Object.keys(mocks.pullrequests.responses);
      return Promise.each(orgs, (org) => {

        const repos = Object.keys(mocks.pullrequests.responses[org]);
        return Promise.map(repos, (repo) => {

          const mockResp = mocks.pullrequests.responses[org][repo];

          const scope = nock(config.get('github.url'))
            .post('')
            .reply(200, mockResp);

          return github.fetchPullRequests(repo, org);
        })
        .then((data) => githubStats.getAvgAndMedianDataForPullRequests(data, 'minutes'))
        .then((data) => {
          assert.deepEqual(data, mocks.stats.expected.averagesAndMedians[org]);
        });
      });

    });

  });

});
