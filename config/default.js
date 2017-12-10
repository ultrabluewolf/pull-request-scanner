'use strict';

module.exports = {

  logger: {
    level: 'debug',
  },

  github: {
    limits: {
      repos: 100,
      pullrequests: 5000,
    },
    metrics: {
      timeunit: 'hours',
    },
  },

};
