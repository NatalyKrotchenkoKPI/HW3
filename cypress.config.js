const { defineConfig } = require('cypress');

module.exports = defineConfig({
    e2e: {
      baseUrl: "https://conduit.realworld.how",
      projectId: 'mob25h',
      specPattern: 'cypress/integration/tests/**/*.spec.js',
      env: {
        email: "dd29042004@gmail.com",
        password: "TestPassword"
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
