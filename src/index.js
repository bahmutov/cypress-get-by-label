import { getByCommand } from './get-by'
export const registerCommand = (name = 'getByLabel') => {
  const getByName = getByCommand(name)
  Cypress.Commands.add(name, getByName)
}
