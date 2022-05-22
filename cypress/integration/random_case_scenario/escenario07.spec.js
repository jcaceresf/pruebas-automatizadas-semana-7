import { faker } from "@faker-js/faker";

import {
  login,
  crearPost,
  publicarPost,
  eliminarTodosLosPost,
  listarPostsBlog
} from "../functions";


describe('Publicar post', function () {
  it('Al loggearse y crear un post sin publicarlo, no debe estar disponible en la vista de visitante', function () {
    let randomTitle = faker.random.alpha(Math.random() * 500)
    let randomBody = faker.lorem.lines()

    cy.wait(1000);
    login();
    cy.wait(1000);
    eliminarTodosLosPost();
    cy.wait(1000);
    crearPost(randomTitle, randomBody);
    cy.wait(1000);
    listarPostsBlog();
    cy.wait(1000);

    cy.get(`h2:contains("${randomTitle}")`).should('not.exist');
  })
})