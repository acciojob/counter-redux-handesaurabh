import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8080',
    supportFile: false,
    specPattern: 'cypress/integration/tests/**/*.spec.js',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})