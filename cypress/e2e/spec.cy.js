describe('create a new task', () => {
  it('adds a new task to the Todo list', () => {
    cy.visit('http://127.0.0.1:5173')
    cy.get('placeholder').type('Enter a new todo')
    cy.contains('add').click()
    cy.get('li').should('have.length', 4)
    cy.contains('new task').should('exist')
  })
})