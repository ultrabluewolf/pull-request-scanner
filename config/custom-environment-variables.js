'use strict';

module.exports = {

  logger: {
    level: 'LOGLEVEL',
  },

  github: {
    url: 'GITHUB_URL',
    key: 'GITHUB_API_TOKEN',
    limits: {
      repos: 'GITHUB_MAX_REPOS',
      pullrequests: 'GITHUB_MAX_PULLREQUESTS',
    },
  },

};
