import { URL, LOGIN_EMAIL, LOGIN_PASSWORD } from "../env";
import { faker } from "@faker-js/faker";
import { login, crearPost, editarPost, logout, publicarPost, verPostBlog } from "../functions";


describe('Escenario 6', function () {
  it('Ver posts blog, login, editar post, logout, ver posts blog, ver detalle post', function () {
    const randomTitle = faker.random.alpha(Math.random() * 500)
    const randomBody = faker.lorem.lines()

    login();
    cy.wait(1000);
    crearPost(randomTitle, randomBody);
    cy.wait(1000);
    editarPost(' con Título editado', ' Contenido editado')
    cy.wait(1000);
    publicarPost();
    cy.wait(1000);
    logout();
    cy.wait(1000);
    cy.visit(URL);
    cy.wait(1000);
    verPostBlog();
  })
})