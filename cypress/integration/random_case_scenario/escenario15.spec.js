//Login - eliminar post - listar posts en interfaz de administrador

import { login, eliminarTodosLosPost, crearPost } from "../functions";
import { faker } from "@faker-js/faker";

describe('Escenario 15', function () {
    it('login, eliminar posts, listar posts en administrador y crear nuevo post', function () {
        let postTitle = faker.random.word();
        let postBody = faker.random.words(12);

        login();
        cy.wait(1000);
        eliminarTodosLosPost();
        cy.wait(1000);
        crearPost(postTitle, postBody);
    })
})