describe('Counter App', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('renders the app and intialises with 0', () => {
    cy.get('h1').should('contain.text', '0')
  })

  it('increase count on clicking increment & decrease on clicking decrease', () => {
    // Test increment
    cy.contains('increment').click()
    cy.get('h1').should('contain.text', '1')
    
    // Test decrement
    cy.contains('decrement').click()
    cy.get('h1').should('contain.text', '0')
    cy.contains('decrement').click()
    cy.get('h1').should('contain.text', '-1')
  })
})