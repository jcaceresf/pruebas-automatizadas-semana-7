import { faker } from "@faker-js/faker";

import { 
  login, 
  crearPost, 
  publicarPost, 
  eliminarTodosLosPost,
  agregarImagenPost,
  listarPostsBlog,
  verPostBlog 
} from "../functions";


describe('Publicar post', function () {
  it('login - publicar post - ver detalle post', function () {
    let randomTitle = faker.random.alpha(10)
    let randomBody = faker.lorem.lines(30)

    cy.wait(1000);
    login();
    cy.wait(1000);
    crearPost(randomTitle, randomBody);
    cy.wait(1000);
    listarPostsBlog();
    cy.wait(1000);

  })
})