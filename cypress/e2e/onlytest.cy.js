import LoginPage from '../pages/LoginPage';

describe("CodeChef Login Automation", () => {

    const login = new LoginPage();

    beforeEach(() => {
        login.visit();
    });

    it("Invalid Credentials", () => {
      cy.fixture('loginData').then((data) => {

        login.enterUsername(data.invaliduser.username);
        login.enterPassword(data.invaliduser.password);
        login.clickLogin();

        //cy.contains("Sorry").should('exist');
    });
  })
    
    it("Invalid Username", () => {
      cy.fixture('loginData').then((data) => {

        login.enterUsername(data.invaliduser.username);
        login.enterPassword(data.validuser.password);
        login.clickLogin();

        //cy.contains("Sorry").should('exist');
              
    })
    })



    it("Invalid Password", () => {
            cy.fixture('loginData').then((data) => {

        login.enterUsername(data.validuser.username);
        login.enterPassword(data.invaliduser.password);
        login.clickLogin();

        //cy.contains("Sorry").should('exist');
    });
  })

it("Valid Login", () => {
      cy.fixture('loginData').then((data) => {
        login.enterUsername(data.validuser.username)
        login.enterPassword(data.validuser.password)
        login.clickLogin()

       // cy.url().should('include','dashboard'); 
        // change if redirected elsewhere
    })
  })
    
})

