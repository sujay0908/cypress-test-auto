import LoginPage from "../pages/LoginPage";
describe("Codechef 1+2 Test", () => {
  it("valid username and valid password", () => {
    cy.fixture('loginData').then((data) => {
        cy.intercept('POST', '/api/codechef/login').as('loginRequest');

        const login = new LoginPage();
        login.visit();
        login.enterUsername(data.validuser.username);
        login.enterPassword(data.validuser.password);
        login.clickLogin();

        cy.wait('@loginRequest').then((interception) => {

            const response = interception.response;
            expect(response.statusCode).to.exist
            // Add more assertions based on the expected response structure

            cy.log('Login API Response:');
            cy.log(JSON.stringify(response.body));

            cy.log('Login API Status Code:');
            cy.log(JSON.stringify(response.statusCode)); 
            // cy.wait(2000); // Adjust the wait time as needed for the page to load after login
            //  cy.screenshot('Login-Success'); 
        })
  }); 
})   
});

// describe('API Testing', () => {

//   it('GET users', () => {

//     cy.request({
//       method: 'POST',
//       url: 'https://www.codechef.com/login',
//     }).then((response) => {

//       expect(response.status).to.eq(200)
//       expect(response.body).to.have.length.greaterThan(0)

//     })

//   })

// })
