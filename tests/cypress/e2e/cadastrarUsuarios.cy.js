/// <reference types='cypress' />

import user from '../fixtures/user.json';

const url = 'apiRestAluno';
Cypress.env('baseUrl', url);
const usersRout = Cypress.env('users');

let id = '';
const auth = '';

describe('Cadastrar usuário', () => {

  it('Cadastrar usuário com sucesso', () => {
    cy.postGenerico(usersRout, user, auth).then(response => {
      console.log(response.body);
      id = response.body.id;
      expect(response.body).to.have.property('email', user.email);
      expect(response.status).to.eq(200);
      cy.validaContrato('user/userStore.json', response.body);
    });
  });

  after(() => {
    cy.deleteGenerico(usersRout, id, auth).then(response => {
      console.log(response);
    });
  });
});
