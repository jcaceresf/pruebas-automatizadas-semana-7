import { faker } from "@faker-js/faker";
import { URL, LOGIN_EMAIL, LOGIN_PASSWORD } from "../env";
import { login, crearPost, editarPost, logout, publicarPost, verPostBlog, eliminarPost } from "../functions";


describe('Escenario 8', function () {
  it('login, crear post, listar posts, eliminar post, listar posts', function () {
    const randomTitle = faker.random.alpha(Math.random() * 500)
    const randomBody = faker.lorem.lines()

    login();
    cy.wait(1000);
    crearPost(randomTitle, randomBody);
    cy.wait(1000);
    eliminarPost();
  })
})