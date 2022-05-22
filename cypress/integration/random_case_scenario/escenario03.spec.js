import { faker } from "@faker-js/faker";
import { URL, LOGIN_EMAIL, LOGIN_PASSWORD } from "../env";
import { crearPost, editarPost } from "../functions";


describe('Escenario 3', function () {
  it('Iniciar sesión, crear un post, editarlo y listarlo', function () {
    const randomTitle = faker.random.alpha(Math.random() * 500)
    const randomBody = faker.lorem.lines()

    login();
    crearPost(randomTitle, randomBody);
    cy.wait(1000);
    editarPost(randomTitle, randomBody);
    cy.wait(1000);
  })
})


function login() {
  cy.visit(URL + '/ghost');
  cy.wait(1000);
  cy.get('.email').type(LOGIN_EMAIL, { force: true });
  cy.get('.password').type(LOGIN_PASSWORD + '{enter}', { force: true });
  cy.wait(1000);
}