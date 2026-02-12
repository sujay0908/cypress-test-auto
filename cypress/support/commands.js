// // ***********************************************
// // This example commands.js shows you how to
// // create various custom commands and overwrite
// // existing commands.
// //
// // For more comprehensive examples of custom
// // commands please read more here:
// // https://on.cypress.io/custom-commands
// // ***********************************************
// //
// //
// // -- This is a parent command --
// // Cypress.Commands.add('login', (email, password) => { ... })
// //
// //
// // -- This is a child command --
// // Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
// //
// //
// // -- This is a dual command --
// // Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
// //
// //
// // -- This will overwrite an existing command --
// // Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Cypress.Commands.add('loginSession', () => {

//   cy.session('codechef-session', () => {

//     cy.visit('https://www.codechef.com/login?destination=/')
//     cy.fixture('loginData').then((data) => {
//       cy.get('#edit-name')
//         .should('be.visible')
//         .clear()
//         .type(data.validuser.username);

//       cy.get('#edit-pass')
//         .should('be.visible')
//         .clear()
//         .type(data.validuser.password);

//       cy.get('.ccl-f-input.ccl-float-right.cc-login-btn ')
//         .should('be.visible')
//         .click();
//     // Confirm login success
//     //cy.url().should('not.include', 'login')

//   })
//   })
// })
