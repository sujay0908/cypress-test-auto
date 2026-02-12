// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import 'cypress-mochawesome-reporter/register';
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
afterEach(function () {
  // ✅ Safety guard (prevents Cypress crashes)
  if (Cypress.runner && Cypress.runner.stopped) return

  const testName = this.currentTest.title.replace(/[^a-zA-Z0-9]/g, '_')
  const status = this.currentTest.state

  // ✅ Reset scroll to avoid stitched screenshots
  cy.window().then((win) => {
    win.scrollTo(0, 0)
  })
  cy.wait(5000)
  // ✅ Clean, single-viewport screenshot
  cy.screenshot(`${testName}__${status}`, {
    capture: 'viewport',
    overwrite: true
  })
})
