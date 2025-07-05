const url = 'apiRestAluno';
Cypress.env('baseUrl', url);
const usersRout = Cypress.env('users');

const id = '';
const auth = '';

describe('Teste api alunos', () => {
  it('Index alunos', () => {
    cy.getGenerico(usersRout, id, auth).then(response => {
      console.log(response.body);
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array');
      cy.validaContrato('index200.json', response.body);
    });
  });
  it('Show aluno', () => {
    cy.getGenerico(usersRout, 1, auth).then(response => {
      console.log(response.body);
      expect(response.status).to.eq(200);
      expect(response.body.nome).to.be.equal('Joaquin EDITADO');
      cy.validaContrato('show200.json', response.body);
    });
  });
});
