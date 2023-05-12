describe('create a new task', () => {
  it('adds a new task to the Todo list', () => {
    cy.visit('http://127.0.0.1:5173/')
    cy.get('[type=text]').type('New task')
    cy.get('button').contains('Add').click()
    cy.get('li').should('have.length', 4)
    cy.get('li').contains('new task').should('exist')
  })
})