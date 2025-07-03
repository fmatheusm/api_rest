Cypress.Commands.add('getGenerico', (endpoint, id, auth) => {
  const baseUrl = Cypress.env('baseUrl');
  const requestUrl = endpoint.startsWith('http') ? endpoint : Cypress.env(baseUrl) + endpoint;
  cy.request({
    method: 'GET',
    url: requestUrl + `${id}`,
    failOnStatusCode: false,
    headers: {
      'Authorization': auth,
      'Content-type': 'application/json; charset=UTF-8'
    }
  });
});
