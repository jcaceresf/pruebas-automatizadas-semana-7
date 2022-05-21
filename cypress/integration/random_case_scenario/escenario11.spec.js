//El usuario hace login, luego elimina todos los post, crea un post nuevo agreta una imagen
//al post y finalmente lista todos los post.

import { faker } from "@faker-js/faker";

import { 
  login, 
  crearPost, 
  publicarPost, 
  eliminarTodosLosPost,
  agregarImagenPost,
  listarPostsBlog 
} from "../functions";


describe('Publicar post', function () {
  it('login - publicar post - ver detalle post', function () {
    let postTitle = faker.random.alpha(10)
    let postBody = faker.lorem.lines()

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
  })
})