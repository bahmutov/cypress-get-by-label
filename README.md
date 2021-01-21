# cypress-get-by-label [![ci status][ci image]][ci url]
> Example custom Cypress command finding form element by its label

## install

```
npm i -D cypress-get-by-label
# or
yarn add -D cypress-get-by-label
```

## use

Include from your Cypress support file or individual spec

```js
const { registerCommand } = require('cypress-get-by-label')
registerCommand()
// or we could register under a different name
registerCommand('getFormField')
```

Then use the command `cy.getByLabel` (default) or the custom name

```js
// if used registerCommand()
cy.getByLabel('First name:')
// if used registerCommand('getFormField')
cy.getFormField('First name:')
```

[ci image]: https://github.com/bahmutov/cypress-get-by-label/workflows/ci/badge.svg?branch=main
[ci url]: https://github.com/bahmutov/cypress-get-by-label/actions
