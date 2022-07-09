const { getByCommand } = require('./src/get-by')

// register a new custom command cy.getByLabel
Cypress.Commands.add('getByLabel', getByCommand('getByLabel'))
