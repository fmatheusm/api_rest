Cypress.Commands.add('deleteGenerico', (endpoint, id, auth) => {
  const baseUrl = Cypress.env('baseUrl');
  const requestUrl = endpoint.startsWith('http') ? endpoint : Cypress.env(baseUrl) + endpoint;
  cy.request({
    method: 'DELETE',
    url: requestUrl + `${id}`,
    failOnStatusCode: false,
    headers: {
      'Authorization': auth,
      'Content-type': 'application/json; charset=UTF-8'
    }
  });
});
