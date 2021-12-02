// @ts-check
/// <reference path="../../src/index.d.ts" />
// @ts-ignore
const { registerCommand } = require('../..')
registerCommand()
// or we could register under a different name
registerCommand('getFormField')

describe('cypress-get-by-label', () => {
  it('find the elements', () => {
    // path with respect to the root folder
    cy.visit('cypress/index.html')
    cy.getByLabel('First name:').should('have.value', '').type('Joe')
    cy.getByLabel('First name:')
      .should('have.value', 'Joe')
      .and('have.attr', 'name', 'fname')

    // try alternative command name, since it is not in the index.d.ts
    // TypeScript does not know about it
    // @ts-ignore
    cy.getFormField('Last name:').type('Smith')
    // check the form inputs
    cy.get('form')
      .invoke('serializeArray')
      .should('deep.equal', [
        { name: 'fname', value: 'Joe' },
        { name: 'lname', value: 'Smith' },
      ])
  })
})
