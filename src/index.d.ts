// load type definitions that come with Cypress module
/// <reference types="cypress" />
declare namespace Cypress {
  interface Chainable {
    /**
     * Finds a form element using the label's text
     * @param label string
     * @example
     *  cy.getByLabel('First name:').type('Joe')
     */
    getByLabel(label: string): Chainable<JQuery<HTMLElement>>
  }
}
