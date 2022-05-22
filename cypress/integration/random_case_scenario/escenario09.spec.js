
import { faker } from "@faker-js/faker";
import { URL, LOGIN_EMAIL, LOGIN_PASSWORD } from "../env";
import { login, crearPost, editarPost, logout, publicarPost, verPostBlog, eliminarPost, cambiarAccesoPost, listarPostsBlog } from "../functions";


describe('Escenario 9', function () {
  it('login, crear post, publicar posts, cambiar acceso, logout, ver posts blog', function () {
    const randomTitle = faker.random.alpha(Math.random() * 500)
    const randomBody = faker.lorem.lines()

    login();
    cy.wait(1000);
    crearPost(randomTitle, randomBody);
    cy.wait(1000);
    publicarPost();
    cy.wait(1000);
    cambiarAccesoPost();
    cy.wait(1000);
    logout();
    cy.wait(1000);
    listarPostsBlog();
  })
})