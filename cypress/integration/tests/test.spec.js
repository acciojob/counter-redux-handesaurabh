describe('Counter App', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('renders the app and intialises with 0', () => {
    cy.get('h1').should('contain.text', '0')
  })

  it('displays initial count of 0 in h1 element', () => {
    cy.get('h1').should('contain.text', '0')
  })

  it('has increment button as second child of div', () => {
    cy.get('div').eq(0).children().eq(1).should('contain.text', 'Increment')
  })

  it('has decrement button as third child of div', () => {
    cy.get('div').eq(0).children().eq(2).should('contain.text', 'Decrement')
  })

  it('increments counter when increment button is clicked', () => {
    cy.get('button').contains('Increment').click()
    cy.get('h1').should('contain.text', '1')
  })

  it('decrements counter when decrement button is clicked', () => {
    cy.get('button').contains('Decrement').click()
    cy.get('h1').should('contain.text', '-1')
  })

  it('correctly updates count after multiple clicks', () => {
    // Click increment twice
    cy.get('button').contains('Increment').click()
    cy.get('button').contains('Increment').click()
    cy.get('h1').should('contain.text', '2')
    
    // Click decrement three times
    cy.get('button').contains('Decrement').click()
    cy.get('button').contains('Decrement').click()
    cy.get('button').contains('Decrement').click()
    cy.get('h1').should('contain.text', '-1')
  })
})