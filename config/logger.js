'use strict';

const bunyan = require('bunyan');
const config = require('config');

const logger = bunyan.createLogger({
  name: require('../package.json').name,
  level: config.logger.level,
});

module.exports = function Logger(subName) {
  if (subName) {
    return logger.child({ module: subName });
  }

  return logger;
};
