'use strict';

// load .env (redundant when service ran via docker compose)
require('dotenv').config();

const config = require('config');
const logger = require('./config/logger')('pull-requestor');

const github = require('./api').services.github;
const githubStats = require('./api').services.githubStats;

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
    const totals = githubStats.getTotalPullRequestsFromResponses(data);
    const numPullRequests = githubStats.getNumberOfPullRequestMergedPerWeek(data);
    const averagesAndMedians = githubStats.getAvgAndMedianDataForPullRequests(data, config.get('github.metrics.timeunit'));

    const summary = {
      repos: data.length,
      totals,
      pullrequests: {
        totals: numPullRequests,
        averagesAndMedians,
      },
    };
    logger.info({ data: summary }, 'pull requests metrics');
  })
  .catch((err) => logger.error(err));
