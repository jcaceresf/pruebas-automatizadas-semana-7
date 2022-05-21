//Login - crear nuevo post - Listar post en interfaz administrador
//crear nuevo post - listar post en interfaz administrador
//post con contenido duplicado
import { faker } from "@faker-js/faker";
import { login, crearPost, listarPostsAdmin } from "../functions";

describe('Escenario 20', function () {
    it('creación de post con diferentes tamaños', function () {
        let postTitle1 = faker.random.alpha(20);
        let postBody1 = faker.random.words(120);

        let postTitle2 = faker.random.alpha(30);
        let postBody2 = faker.random.words(150);

        login();
        cy.wait(1000);
        crearPost(postTitle1, postBody1);
        cy.wait(1000);
        listarPostsAdmin();
        cy.wait(1000);
        crearPost(postTitle2, postBody2);
        cy.wait(1000);
        listarPostsAdmin();      
    })
})