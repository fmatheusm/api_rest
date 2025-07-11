Cypress.Commands.add('putGenericoBody', (endpoint, id, bodyRequest, auth) => {
  const baseUrl = Cypress.env('baseUrl');
  const requestUrl = endpoint.startsWith('http') ? endpoint : Cypress.env(baseUrl) + endpoint;
  cy.request({
    method: 'GET',
    url: requestUrl + `${id}`,
    failOnStatusCode: false,
    body: bodyRequest,
    headers: {
      'Authorization': auth,
      'Content-type': 'application/json; charset=UTF-8'
    }
  });
});
