// This allow you to use cypress 
const { defineConfig } = require('cypress');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

// Module thatcontain function that will make user able to export
module.exports = defineConfig({
  retries: {
    runMode: 2,
    openMode: 2,
  },
  env: {
    allure: true,
    allureReuseAfterSpec: true
    },
  video: false,
  screenshotsFolder: 'cypress/screenshots',
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
  },
});
// Callback function 