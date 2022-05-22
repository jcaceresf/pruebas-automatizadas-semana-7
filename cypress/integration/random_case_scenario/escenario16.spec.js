import { login, listarPostsAdmin, eliminarTodosLosPost, listarPostsBlog, crearPost, publicarPost, logout } from "../functions";
import { faker } from "@faker-js/faker";

describe('Escenario 16:', function () {

  it('Al eliminar todos los posts, se crea uno nuevo y se publica', function () {
    let postTitle = faker.random.words(30);
    let postBody = faker.random.words(50);

    login();
    cy.wait(1000);
    listarPostsAdmin();
    cy.wait(3000);
    eliminarTodosLosPost();
    cy.wait(1000);
    logout();
    cy.wait(1000);
    listarPostsBlog();
    assert(Cypress.$('.post-card').length === 0)
    login();
    cy.wait(1000)
    crearPost(postTitle, postBody);
    cy.wait(1000)
    publicarPost();
    cy.wait(1000);
  })
})