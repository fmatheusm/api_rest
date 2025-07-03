const { expect } = require('chai').use(require('chai-json-schema'));

Cypress.Commands.add('validaContrato', (schemaPath, responseBody) => {
  cy.log('Response Body:', JSON.stringify(responseBody, null, 2));
  cy.readFile(`cypress/schema/${schemaPath}`).then(schema => {
    expect(responseBody).to.be.jsonSchema(schema);
  });
});
