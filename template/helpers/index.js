const Logger = require('@ladjs/logger');
const Timeout = require('koa-better-timeout');

const graceful = require('./graceful');
const meta = require('./meta');
const passport = require('./passport');
const dynamicViewHelpers = require('./dynamic-view-helpers');
const renderPage = require('./render-page');
const policies = require('./policies');
const i18n = require('./i18n');
const _404Handler = require('./_404-handler');
const contextHelpers = require('./context-helpers');
const Mongoose = require('./mongoose');
const stopAgenda = require('./stop-agenda');

module.exports = {
  graceful,
  meta,
  Timeout,
  passport,
  dynamicViewHelpers,
  renderPage,
  policies,
  logger: new Logger(),
  i18n,
  _404Handler,
  contextHelpers,
  Mongoose,
  stopAgenda
};
