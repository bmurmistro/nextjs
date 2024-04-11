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
    cy.eyesCheckWindow()

    cy.contains('Templates').click()
  })
})