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
require('cypress-get-by-label')
```

Then use the command `cy.getByLabel`

```js
cy.getByLabel('First name:')
```

[ci image]: https://github.com/bahmutov/cypress-get-by-label/workflows/ci/badge.svg?branch=main
[ci url]: https://github.com/bahmutov/cypress-get-by-label/actions
