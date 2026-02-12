describe('API Login → Open Profile', () => {

  it('Login via API and open profile page', () => {

    const requestBody = {
      userName: "sujaygodugu0908@gmail.com",
      password: "Sujay@0908"
    }

    // Step 1: Login using API
    cy.request('GET', '/api/codechef/login', requestBody)
      .then((response) => {

        // Validate response
        expect(response.status).to.eq(200)

        const token = response.body.token

        // Step 2: Visit profile page with token in localStorage
        cy.visit('/dashboard', {
          onBeforeLoad(win) {
            win.localStorage.setItem('token', token)
          }
        })

        // Step 3: Validate successful navigation
        cy.url().should('include', '/dashboard')
      })

  })

})