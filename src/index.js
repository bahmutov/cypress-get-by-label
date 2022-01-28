const { getByCommand } = require('./get-by')

const registerCommand = (name = 'getByLabel') => {
  const getByName = getByCommand(name)
  Cypress.Commands.add(name, getByName)
}

module.exports = { registerCommand }
