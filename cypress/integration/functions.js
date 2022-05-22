import { URL, LOGIN_EMAIL, LOGIN_PASSWORD } from "./env";


// 1. Crear un nuevo post
export function crearPost(titulo, contenido) {
    cy.visit(URL + '/ghost/#/editor/post');
    cy.wait(1000);
    cy.get('.gh-editor-title').type(titulo, { force: true });
    cy.get('.koenig-editor__editor-wrapper').find('[contenteditable]').type(contenido);
    cy.get('.gh-editor-back-button').click();
}

// 2. Publicar un post
export function publicarPost() {
    cy.get('.gh-post-list-title').first().click();
    cy.wait(1000);
    cy.get('.gh-publishmenu-trigger').click();
    cy.wait(1000);
    cy.get('.gh-publishmenu-button').click();
    cy.wait(1000);
    cy.get('.epm-modal-container').find('.ember-view').click();
    cy.get('.gh-editor-back-button').click();
}

// 3. Ver los post publicados en el home del Blog
export function listarPostsBlog() {
    cy.visit(URL);
}

// 4. Ver detalle de un post
export function verPostBlog() {
    cy.visit(URL);
    cy.get('.post-card-title').first().click({ force: true });
    cy.wait(1000);
}

// 5. Editar el contenido de un post publicado
export function editarPost(titulo, contenido) {
    cy.get('.gh-content-entry-title').first().click();
    cy.wait(1000);
    cy.get('.gh-editor-title').type(titulo, { force: true });
    cy.get('.koenig-editor__editor-wrapper').find('[contenteditable]').type(contenido);
    cy.get('.gh-editor-back-button').click();
}

// 6. Login
export function login() {
    cy.visit(URL + '/ghost');
    cy.wait(1000);
    cy.wait(1000);
    cy.get('.email').type(LOGIN_EMAIL, { force: true });
    cy.get('.password').type(LOGIN_PASSWORD + '{enter}', { force: true });
    cy.wait(1000);
}

// 7. Listar posts en interfaz de administrador
export function listarPostsAdmin() {
    cy.visit(URL + '/ghost/#/posts');
}

// 8. Logout
export function logout() {
    cy.visit(URL + '/ghost/#/posts');
    cy.wait(1000);
    cy.get('.gh-user-avatar').click();
    cy.wait(1000);
    cy.get('.user-menu-signout').click();
}

// 9. Eliminar post
export function eliminarPost() {
    cy.visit(URL + '/ghost/#/posts');
    cy.get('.gh-post-list-title').first().click();
    cy.wait(1000);
    cy.get('.settings-menu-toggle').click();
    cy.wait(1000);
    cy.get('.settings-menu-delete-button').click();
    cy.wait(1000);
    cy.get('.epm-modal-container').find('.ember-view').click();
    cy.wait(1000);
}

// 10. Cambiar el acceso del post
export function cambiarAccesoPost() {
    cy.visit(URL + '/ghost/#/posts');
    cy.wait(1000);
    cy.get('.gh-post-list-title').first().click();
    cy.wait(1000);
    cy.get('.settings-menu-toggle > span').click();
    cy.wait(1000);
    cy.get('select').select('Members only');
    cy.wait(1000);
    cy.get('.settings-menu-open').click();
    cy.wait(1000);
    cy.get('.gh-publishmenu-trigger').click();
    cy.wait(1000);
    cy.get('.gh-publishmenu-button').click();
    cy.wait(1000);
    cy.get('.gh-btn-black').click();
    cy.wait(1000);
    cy.get('.gh-editor-back-button').click({ force: true });
}

// 11. Agregar imagen al post
export function agregarImagenPost() {
    cy.get('.gh-post-list-title').first().click();
    cy.wait(1000);
    cy.get('.gh-editor-feature-image-unsplash').click({ force: true });
    cy.wait(1000);
    cy.get('.gh-unsplash-grid').find("a[href='#']").contains('Insert image').first().click({ force: true });
    cy.wait(1000);
    cy.get('.gh-publishmenu-trigger').click();
    cy.wait(1000);
    cy.get('.gh-publishmenu-button').click();
    cy.wait(1000);
    cy.get('.epm-modal-container').find('.ember-view').click();
    cy.get('.gh-editor-back-button').click();
}

// 12. Eliminar imagen
export function eliminarImagenPost() {
    cy.get('.gh-post-list-title').first().click();
    cy.wait(1000);
    cy.get('.image-delete').first().click();
    cy.wait(1000);
    cy.get('.gh-publishmenu-trigger').click();
    cy.wait(1000);
    cy.get('.gh-publishmenu-button').click();
    cy.wait(1000);
    cy.get('.epm-modal-container').find('.ember-view').click();
    cy.get('.gh-editor-back-button').click();
}

// 13. Despublicar el posts
export function despublicarPost() {
    cy.get('.gh-post-list-title').first().click();
    cy.wait(1000);
    cy.get('.gh-publishmenu-trigger').click();
    cy.wait(1000);
    cy.get('.gh-publishmenu-radio-button').first().click();
    cy.wait(1000);
    cy.get('.gh-publishmenu-button').click();
    cy.wait(1000);
    cy.get('.gh-editor-back-button').click();
}

// 14. Cambiar contraseña
export function cambiarPassword() {

}

export function eliminarTodosLosPost() {
    cy.visit(URL + '/ghost/#/posts');
    cy.wait(2000);

    cy.get('body').then($body => {
        if ($body.find('.gh-post-list-title').length) {
            cy.get('.gh-post-list-title').each((items) => {
                cy.get('.gh-post-list-title').first().click();
                cy.wait(1000);
                cy.get('.settings-menu-toggle').click();
                cy.wait(1000);
                cy.get('.settings-menu-delete-button').click();
                cy.wait(1000);
                cy.get('.epm-modal-container').find('.ember-view').click();
                cy.wait(1000);
                cy.visit(URL + '/ghost/#/posts');
                cy.wait(1000);
            });
        }
    });

}