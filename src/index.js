export const registerCommand = (name = 'getByLabel') => {
  const getByCommand = (label) => {
    cy.log(`**${name}**`)
    cy.contains('label', label)
      .invoke('attr', 'for')
      .then((id) => {
        cy.get('#' + id)
      })
  }

  Cypress.Commands.add(name, getByCommand)
}
