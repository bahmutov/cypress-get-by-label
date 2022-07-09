// @ts-check
/// <reference path="../../src/index.d.ts" />
import '../../commands'

describe('cypress-get-by-label', () => {
  it('registers the commands', () => {
    cy.visit('cypress/index.html')
    cy.getByLabel('First name:').should('have.value', '').type('Joe')
  })
})
