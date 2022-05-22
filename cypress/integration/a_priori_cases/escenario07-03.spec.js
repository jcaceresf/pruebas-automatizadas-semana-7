import { URL, LOGIN_EMAIL, LOGIN_PASSWORD } from "../env";

import { 
    login, 
    crearPost, 
    publicarPost, 
    eliminarTodosLosPost,
    listarPostsBlog 
} from "../functions";

describe('Escenario 7-03:', function () {

    it('Al iniciar sesión, crear un post y hacer logout, este está en la interfaz del blog', () => {
        cy.fixture('pool.json').then((pool) => {

            login();
            cy.wait(1000);
            crearPost(pool.caso_3.titulo, pool.caso_3.contenido);
            cy.wait(1000);
            eliminarTodosLosPost();
            cy.wait(1000);
            crearPost(pool.caso_3.titulo, pool.caso_3.contenido);
            cy.wait(1000);
            listarPostsBlog();
            cy.wait(1000);
        
            cy.get(`h2:contains("${pool.caso_3.titulo}")`).should('not.exist');
        })
    })
})