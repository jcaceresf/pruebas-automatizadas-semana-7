import { faker } from "@faker-js/faker";
import { URL, LOGIN_EMAIL, LOGIN_PASSWORD } from "../env";

import {
  crearPost,
  publicarPost,
  eliminarTodosLosPost
} from "../functions";


describe('Escenario 2: ', function () {
  it('Al loggearse, borrar todos los posts, crear uno nuevo y publicarlo, este se encuentra en la interfaz de admin', function () {
    const randomTitle = faker.random.alpha(Math.random() * 500)
    const randomBody = faker.lorem.lines()

    cy.wait(1000);
    login();
    cy.wait(1000);
    eliminarTodosLosPost();
    cy.wait(1000);
    crearPost(randomTitle, randomBody);
    cy.wait(1000);
    publicarPost();

    listarPostsAdmin().should('include.text', randomTitle);
  })
})


function login() {
  cy.visit(URL + '/ghost');
  cy.wait(1000);
  cy.get('.email').type(LOGIN_EMAIL, { force: true });
  cy.get('.password').type(LOGIN_PASSWORD + '{enter}', { force: true });
  cy.wait(1000);
}

function listarPostsAdmin() {
  cy.visit(URL + '/ghost/#/posts');
  return cy.get('.gh-posts-list-item');
}