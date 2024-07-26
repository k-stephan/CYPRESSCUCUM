const cucumber = require("cypress-cucumber-preprocessor").default;
const { defineConfig } = require("cypress");
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

/// <reference types="cypress" />


module.exports = defineConfig({


  e2e: {
    setupNodeEvents(on, config) {

      on('file:preprocessor', cucumber());


    },
    specPattern: 'cypress/e2e/**/*.feature',
  },
});
