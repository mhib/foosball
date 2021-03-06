var path = require('path');
var defaultConfig = require('@ionic/app-scripts/config/webpack.config.js');

const DEV_ENV  = './src/environments/environment.ts';
const PROD_ENV = './src/environments/environment.prod.ts';

const devAlias = {
  "@app/env" : path.resolve(DEV_ENV)
};
const prodAlias = {
  "@app/env" : path.resolve(PROD_ENV)
};

module.exports = function () {
  defaultConfig.dev.resolve.alias  = devAlias;
  defaultConfig.prod.resolve.alias = prodAlias;

  return defaultConfig;
};