describe('Navigation', () => {
  beforeEach(function() {
    cy.eyesOpen({
      appName: 'nextjs',
      testName: this.currentTest.title,
    })
  })
  afterEach(() => {
    cy.eyesClose()
  })

  it('should navigate to the nextjs page', () => {
    // Start from the index page
    cy.visit('/')
    cy.eyesCheckWindow('Login Page')

    // Find a link with an href attribute containing "about" and click it
    cy.contains('Templates').click()
  })
})