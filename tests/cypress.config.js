const { defineConfig } = require('cypress');
/**
 * @type {Cypress.PluginConfig}
 */

const fs = require('fs-extra');
const path = require('path');

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve(
    '.',
    'cypress/config',
    `${file}.json`
  );

  return fs.readJson(pathToConfigFile);
}

module.exports = defineConfig({
  env: {
    apiRestAluno: 'http://localhost:3001/',
    hackerNews: 'https://hackernews-seven.vercel.app/',
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const file = config.env.configFile || 'hml';

      return getConfigurationByFile(file);
    },
    viewportWidth: 1366,
    viewportHeight: 768,
    defaultCommandTimeout: 40000,
    responseTimeout: 100000,
    chromeWebSecurity: false,
  },
});
