import { faker } from "@faker-js/faker";
import { URL, LOGIN_EMAIL, LOGIN_PASSWORD } from "../env";
import { crearPost, editarPost } from "../functions";


describe('Escenario 3', function () {
  it('Iniciar sesión, crear un post, editarlo y listarlo', function () {
    cy.fixture('pool.json').then((pool) => {
      login();
      crearPost(pool.caso_1.titulo, pool.caso_1.contenido);
      cy.wait(1000);
      editarPost(pool.caso_1.titulo, pool.caso_1.contenido);
      cy.wait(1000);
    })
  })
})


function login() {
  cy.visit(URL + '/ghost');
  cy.wait(1000);
  cy.get('.email').type(LOGIN_EMAIL, { force: true });
  cy.get('.password').type(LOGIN_PASSWORD + '{enter}', { force: true });
  cy.wait(1000);
}