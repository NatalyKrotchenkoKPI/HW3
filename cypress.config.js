const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'mob25h',
  e2e: {
    baseUrl: 'https://conduit.realworld.how',
    specPattern: 'cypress/integration/tests/**/*.spec.{js,jsx,ts,tsx}',
  },
});
