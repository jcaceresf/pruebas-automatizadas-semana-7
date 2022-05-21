import { URL, LOGIN_EMAIL, LOGIN_PASSWORD } from "../env";

import { 
    login, 
    crearPost, 
    publicarPost, 
    eliminarTodosLosPost,
    listarPostsBlog,
    cambiarAccesoPost,
    logout
} from "../functions";

describe('Escenario 9-00:', function () {

    it('Al iniciar sesión, crear un post, publicarlo, cambiar el acceso al post y hacer logout, este está en la interfaz del blog', () => {
        cy.fixture('pool.json').then((pool) => {  

            login();
            cy.wait(1000);
            crearPost(pool.caso_0.titulo, pool.caso_0.contenido);
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
})