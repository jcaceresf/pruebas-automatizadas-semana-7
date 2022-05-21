import { URL, LOGIN_EMAIL, LOGIN_PASSWORD } from "../env";

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

describe('Escenario 12-00:', function () {

    it('Al iniciar sesión, crear un post, agregarle una imagen, hacer logout, ver los posts en el blog, ver detalle, login de nuevo, eliminar la imagen, logout de nuevo y visualizar los post en el blog', () => {
        cy.fixture('pool.json').then((pool) => {  

            login();
            cy.wait(1000);
            eliminarTodosLosPost();
            cy.wait(1000);
            crearPost(pool.caso_0.titulo, pool.caso_0.contenido);
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
            eliminarImagenPost();
            cy.wait(1000);
            listarPostsBlog();
            cy.wait(1000);

            cy.get(`.post-card-image`).should('not.exist');
        })
    })
})
