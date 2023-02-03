const getByCommand = (name) => (subject, label) => {
  cy.log(`**${name}**`)

  if (typeof subject === 'string' && typeof label === 'undefined') {
    // we have only the label
    label = subject
    subject = undefined
  }

  if (subject) {
    // limit ourselves to the subject
    cy.wrap(subject, { log: false })
      .contains('label', label)
      .invoke('attr', 'for')
      .then((id) => {
        cy.wrap(subject, { log: false }).find('#' + id)
      })
  } else {
    cy.contains('label', label)
      .invoke('attr', 'for')
      .then((id) => {
        cy.get('#' + id)
      })
  }
}

module.exports = { getByCommand }
