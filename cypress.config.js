const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/*.spec',
  },
  viewportWidth: 1280,
  viewportHeight: 720,
  defaultCommandTimeout: 60000,
  pageLoadTimeout: 60000,
  requestTimeout: 30000,
  chromeWebSecurity: false,
  watchForFileChanges: true,
  projectId: 'b738z9',
  retries: 1,
});
