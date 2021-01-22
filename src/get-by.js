export const getByCommand = (name) => (label) => {
  cy.log(`**${name}**`)
  cy.contains('label', label)
    .invoke('attr', 'for')
    .then((id) => {
      cy.get('#' + id)
    })
}
