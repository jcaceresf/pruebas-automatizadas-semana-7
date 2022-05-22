import { faker } from "@faker-js/faker";

import { 
  login, 
  crearPost, 
  publicarPost, 
  eliminarTodosLosPost,
  despublicarPost,
  listarPostsBlog 
} from "../functions";


describe('Publicar post', function () {
  it('login - publicar post - ver detalle post', function () {
    let randomTitle = faker.random.alpha(50)
    let randomBody = faker.lorem.lines(50)

    cy.wait(1000);
    login();
    cy.wait(1000);
    eliminarTodosLosPost();
    cy.wait(1000);
    crearPost(randomTitle, randomBody);
    cy.wait(1000);
    publicarPost();
    cy.wait(1000);
    despublicarPost();
    cy.wait(1000);
    listarPostsBlog();
    cy.wait(1000);

    cy.get(`h2:contains("${randomTitle}")`).should('not.exist');
  })
})