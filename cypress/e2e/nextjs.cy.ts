describe('Navigation', () => {
  it('should navigate to the about page', () => {
    // Start from the index page
    cy.visit('https://' + Cypress.env('process.env.VERCEL_URL'))

    // Find a link with an href attribute containing "about" and click it
    cy.contains('Templates').click()
  })
})