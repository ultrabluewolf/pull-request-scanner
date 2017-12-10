'use strict';

const moment = require('moment');
const config = require('config');
const logger = require('../../config/logger')('github-stats-service');

const MERGED = 'MERGED';

// determine pull requests totals from fetched pull request responses
const getTotalPullRequestsFromResponses = (data) => {
  const result = { repos: {} };
  result.total = data
    .map((repo) => {
      return {
        repo: repo.repository.name,
        count: repo.repository.pullRequests.length,
      };
    })
    .map((data) => {
      result.repos[data.repo] = data.count;
      return data;
    })
    .reduce((acm, repo) => repo.count + acm, 0);
    return result;
};

const getStartOfWeek = (timestamp) => {
  const dt = moment(timestamp);
  const startOfWeek = dt.clone().day('Sunday');
  const startOfWeekStr = startOfWeek.utc().format('YYYY-MM-DD');
  return startOfWeekStr;
};

const getNumberOfPullRequestMergedPerWeek = (data) => {
  const result = { repos: {} };
  result.repos = data.reduce((acm, { repository }) => {

    acm[repository.name] = repository.pullRequests
      .reduce((innerAcm, pullRequest) => {

        if (pullRequest.state === MERGED) {
          const startOfWeekStr = getStartOfWeek(pullRequest.mergedAt);
          if (!innerAcm[startOfWeekStr]) {
            innerAcm[startOfWeekStr] = 0;
          }
          innerAcm[startOfWeekStr] += 1;
        }

        return innerAcm;
      }, {});

    return acm;
  }, {});

  return result;
};

const computeMedian = (list) => {
  const sorted = [...list].sort((a, b) => a - b);

  const middleIdx = Math.floor(sorted.length/2);
  const otherMiddleIdx = middleIdx - 1;

  const median = sorted.length % 2 === 1 ? 
    sorted[middleIdx] : 
    (sorted[otherMiddleIdx] + sorted[middleIdx]) / 2;

  const data = {
    median,
    middleIndices: [otherMiddleIdx, middleIdx],
    sorted,
    length: sorted.length,
  };
  logger.trace({ data }, 'median');
  return median;
};

const computeAverage = (list) => list.reduce((acm, x) => acm + x, 0) / list.length;

const getTimeUnitInfo = (timeUnit) => {
  const DAYS = 'days';
  const HOURS = 'hours';
  const MINS = 'minutes';
  const SECS = 'seconds';

  let divideBy = 60.0;
  let unit = timeUnit;
  if (unit === DAYS) {
    unit = HOURS;
    divideBy = 24.0;
  } else if (unit === HOURS) {
    unit = MINS;
  } else if (unit === MINS) {
    unit = SECS;
  } else {
    logger.error({ err: 'time unit not supported', data: { timeUnit } });
    return [ null, null ];
  }
  return [ unit, divideBy ];
};

// compute averages and medians of pull requests by week
//   - based on creation time and merge time
//   - based on first commit time and merge time
const getAvgAndMedianDataForPullRequests = (data, _timeUnit = 'minutes') => {
  const [ timeUnit, timeUnitDivideBy ] = getTimeUnitInfo(_timeUnit);
  if (!timeUnit) {
    return
  }

  const result = {};
  result.repos = data.reduce((acm, { repository }) => {

    // construct list of diffs for merged times by week
    const diffs = repository.pullRequests.reduce((innerAcm, pullRequest) => {
      if (pullRequest.state === MERGED) {
        const startOfWeekStr = getStartOfWeek(pullRequest.mergedAt);
        if (!innerAcm[startOfWeekStr]) {
          innerAcm[startOfWeekStr] = {
            creation: [],
            firstCommit: [],
            totalCommits: [],
          };
        }

        const diffValues = {};
        // by creation
        diffValues.creation = moment(pullRequest.mergedAt).diff(pullRequest.createdAt, timeUnit) / timeUnitDivideBy;

        // by first commit
        const commits = [...pullRequest.commits]
          .sort((a, b) => a.committedDate - b.committedDate);
        diffValues.firstCommit = (moment(pullRequest.mergedAt).diff(commits[0].committedDate, timeUnit) / timeUnitDivideBy);

        // by number of commits
        diffValues.totalCommits = commits.length;

        const logData = {
          commits,
          commit: commits[0],
          createdAt: pullRequest.createdAt,
          mergedAt: pullRequest.mergedAt,
          diffValues,
        };
        logger.trace({ data: logData }, 'creation|commit vs merged timestamps');

        // add diffs to lists
        Object.keys(diffValues).map((k) => {
          innerAcm[startOfWeekStr][k].push(diffValues[k]);
        });
        return innerAcm;
      }
      return innerAcm;
    }, {});

    // compute averages and medians for each week of diffs
    acm[repository.name] = {};
    Object.keys(diffs).map((date) => {
      acm[repository.name][date] = {};
      Object.keys(diffs[date]).map((type) => {
        const list = diffs[date][type];
        if (list.length === 0) {      
          return;
        }
        const avg = +computeAverage(list).toFixed(2);
        const median = +computeMedian(list).toFixed(2);

        const data = { avg, median, list, length: list.length };
        logger.trace({ data }, 'avg&median');
        acm[repository.name][date][type] = { avg, median };
      });
    });

    return acm;
  }, {});
  return result;
};

module.exports = {
  getTotalPullRequestsFromResponses,
  getNumberOfPullRequestMergedPerWeek,
  getAvgAndMedianDataForPullRequests,
};

