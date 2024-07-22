const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://conduit.realworld.how',
    specPattern: 'cypress/integration/tests/**/*.spec.js',
    setupNodeEvents(on, config) {
      // Додаткові налаштування для event'ів, якщо потрібно
    },
  },
  env: {
    email: 'dd29042004@gmail.com',
    password: 'TestPassword'
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'mochawesome-report',
    overwrite: false,
    html: true,
    json: true
  }
});
