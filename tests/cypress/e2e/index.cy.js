const url = 'apiRestAluno';
Cypress.env('baseUrl', url);
const indexUser = Cypress.env('getIndex');

const id = '';
const auth = '';

describe('Teste', () => {
  it('Index api alunos', () => {
    cy.getGenerico(indexUser, id, auth).then(response => {
      console.log(response.body);
    });
  });

});
