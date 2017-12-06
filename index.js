'use strict';

const config = require('config');
const logger = require('./config/logger')('pull-requestor');

const github = require('./api').services.github;

logger.info('script running...');
