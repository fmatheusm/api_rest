/// <reference types='cypress' />
const url = 'apiRestAluno';
Cypress.env('baseUrl', url);
const usersRout = Cypress.env('users');

const id = '';
const auth = '';

describe('Buscar usuários', () => {
  it('Index alunos', () => {
    cy.getGenerico(usersRout, id, auth).then(response => {
      console.log(response.body);
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array');
      cy.validaContrato('user/index200.json', response.body);
    });
  });
  it('Show aluno', () => {
    cy.getGenerico(usersRout, 1, auth).then(response => {
      console.log(response.body);
      expect(response.status).to.eq(200);
      expect(response.body.nome).to.be.equal('Joaquin EDITADO');
      expect(response.body).to.have.property('id', 1);
      cy.validaContrato('user/show200.json', response.body);
    });
  });
});
