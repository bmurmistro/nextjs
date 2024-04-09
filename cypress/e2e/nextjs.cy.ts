describe('Navigation', () => {
  it('should navigate to the nextjs page', () => {
    // Start from the index page
    cy.visit('/')

    // Find a link with an href attribute containing "about" and click it
    cy.contains('Templates').click()
  })
})