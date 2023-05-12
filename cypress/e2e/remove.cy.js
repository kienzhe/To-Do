describe('remove a task', () => {
    it('remove a task from the Todo list', () => {
        cy.visit('http://localhost:5173')
        cy.get('[type=text]').type('New task')
        cy.get('button').contains('Add').click()
        cy.get('li').contains('New task').should('exist')
        cy.get('li').contains('New task').find('button').click()
        cy.get('li').contains('New task').should('not.exist')
    })
})