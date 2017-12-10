'use strict';

const assert = require('chai').assert;
const nock = require('nock');
const Promise = require('bluebird');
const config = require('config');

const mocks = require('../../test/mocks');

const github = require('./github');

describe('github-service', () => {

  describe('::fetchRepos()', () => {

    it('should retrieve repos and flatten response', () => {

      return Promise.each(mocks.repos.responses, (mockResp, i) => {
        const scope = nock(config.get('github.url'))
        .post('')
        .reply(200, mockResp);

        return github.fetchRepos('myorg')
          .then((data) => {
            assert.deepEqual(data, mocks.repos.expected[i])
          });
      });

    });

  });

  describe('::fetchPullRequests()', () => {

    it('should retrieve pull requests and flatten response', () => {

      const orgs = Object.keys(mocks.pullrequests.responses);
      return Promise.each(orgs, (org) => {

        const repos = Object.keys(mocks.pullrequests.responses[org]);
        return Promise.each(repos, (repo) => {

          const mockResp = mocks.pullrequests.responses[org][repo];

          const scope = nock(config.get('github.url'))
            .post('')
            .reply(200, mockResp);

          return github.fetchPullRequests(repo, org)
            .then((data) => {
              assert.deepEqual(data, mocks.pullrequests.expected.orgs[org][repo])
            });
        });
      });

    });

  });

});
