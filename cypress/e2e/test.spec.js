describe('quick test', () => {
  it('fails', () => {
    cy.visit('https://example.cypress.io')
    cy.contains("hello world").should('be.visible')
  }) 
})