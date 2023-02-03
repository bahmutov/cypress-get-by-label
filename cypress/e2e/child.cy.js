// @ts-check
/// <reference path="../../src/index.d.ts" />
// @ts-ignore
const { registerCommand } = require('../../src')
registerCommand()

describe('cypress-get-by-label child command', () => {
  it('find the elements', () => {
    cy.visit('cypress/child.html')
    cy.get('form#first')
      .getByLabel('First name:')
      .should('have.value', 'Joe')
    // limit ourselves to the second form
    cy.get('form#second')
      .getByLabel('First name:')
      .should('have.value', 'Anna')
  })
})
