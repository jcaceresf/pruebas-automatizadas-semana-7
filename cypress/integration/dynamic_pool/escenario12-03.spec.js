import { URL, LOGIN_EMAIL, LOGIN_PASSWORD } from "../env";
import generatePool from '../poolGenerator.fn';

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

describe('Escenario 12-03:', function () {

    it('login, eliminar posts, crear nuevo post, agregarle imagen, listar en el blog, retirar imagen y volver a listar', function () {
        const pool = generatePool();

        login();
        cy.wait(1000);
        eliminarTodosLosPost();
        cy.wait(1000);
        crearPost(pool?.caso_3?.titulo, pool?.caso_3?.contenido);
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
        listarPostsBlog();
        cy.wait(1000);

        cy.get(`.post-card-image`).should('not.exist');
    })
})