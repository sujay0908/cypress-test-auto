// class LoginPage {

//     visit(){
//          cy.visit(`${Cypress.env('host')}/login`);
//         cy.visit('/login');
//     }

//     enterUsername(username){
//         cy.get('#edit-name').type(username);
//     }

//     enterPassword(password){
//         cy.get('#edit-pass').type(password);
//     }

//     clickLogin(){
//         cy.get('.ccl-f-input.ccl-float-right.cc-login-btn').click();
//     }

// }

// export default LoginPage;
class LoginPage {

    visit(){
        cy.visit('/login');
    }

    enterUsername(username){
        cy.get('#edit-name')
          .should('be.visible')
          .clear()
          .type(username);
    }

    enterPassword(password){
        cy.get('#edit-pass')
          .should('be.enabled')     // prevents disabled error
          .clear()
          .type(password);
    }

    clickLogin(){
        cy.get('.ccl-f-input.ccl-float-right.cc-login-btn')  // BEST locator
          .should('be.visible')
          .click();
    }

}

export default LoginPage;
