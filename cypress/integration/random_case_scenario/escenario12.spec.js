import { faker } from "@faker-js/faker";

import { 
  login, 
  crearPost, 
  publicarPost, 
  eliminarTodosLosPost,
  agregarImagenPost,
  despublicarPost,
  listarPostsAdmin,
  eliminarImagenPost,
  listarPostsBlog 
} from "../functions";


describe('Publicar post', function () {
  it('login - publicar post - ver detalle post', function () {
    let postTitle = faker.database.mongodbObjectId()
    let postBody = faker.database.mongodbObjectId()

    cy.wait(1000);
    login();
    cy.wait(1000);
    eliminarTodosLosPost();
    cy.wait(1000);
    crearPost(postTitle, postBody);
    cy.wait(1000);
    agregarImagenPost();
    cy.wait(1000);
    listarPostsBlog();
    cy.wait(1000);

    cy.get(`.post-card-image`).should('exist');

    listarPostsAdmin();
    cy.wait(1000);
    despublicarPost();
    cy.wait(1000);
    eliminarImagenPost();
    cy.wait(1000);
    listarPostsBlog();
    cy.wait(1000);

    cy.get(`.post-card-image`).should('not.exist');
  })
})