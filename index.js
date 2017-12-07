'use strict';

// load .env (redundant when service ran via docker compose)
require('dotenv').config();

const config = require('config');
const logger = require('./config/logger')('pull-requestor');

const github = require('./api').services.github;

logger.info('script running...');

if (process.argv.length !== 3) {
  logger.error('USAGE: node index.js <organization>')
  return process.exit(1);
}

const organization = process.argv[2];
logger.debug({ data: { organization } }, 'fetching data for organization.');

const maxRepos = config.get('github.limits.repos');
const maxPullRequests = config.get('github.limits.pullrequests'); // per repo

github.fetchRepos(organization, maxRepos)
  .then((data) => github.fetchPullRequestsForRepos(data.organization.repositories, maxPullRequests))
  .then((data) => {
    const stats = github.getTotalPullRequestsFromResponses(data);
    logger.info({ data: { total: stats.total, repos: data.length, stats } }, 'total pull requests');
  })
  .catch((err) => logger.error(err));
