import { URL, LOGIN_EMAIL, LOGIN_PASSWORD } from "../env";

describe('Escenario 10:', function () {

  it('Al eliminar un post, este desaparece para los usuarios', function () {
    listarPostsBlog();
    cy.wait(500);
    cy.get('h2:first').then($title => {
      const title = $title.text();

      login();
      cy.wait(1000);
      listarPostsAdmin();
      eliminarPost(title);
      cy.wait(1000);
      cy.visit(URL + '/ghost/#/signout')
      cy.wait(1000);
      listarPostsBlog();
      cy.get(`h2:contains("${title}")`).should('have.length', 0)
    })
  })
})

function eliminarPost(title) {
  cy.get(`h3:contains(${title})`).click().then(() => {
    cy.wait(500)
    cy.get('button[Title="Settings"]').click()
    cy.wait(250)
    cy.get('button.settings-menu-delete-button').click()
    cy.wait(500)
    cy.get(".modal-footer").children(':contains("Delete")').click()
  })
}

function login() {
  cy.visit(URL + '/ghost');
  cy.wait(1000);
  cy.get('.email').type(LOGIN_EMAIL, { force: true });
  cy.get('.password').type(LOGIN_PASSWORD + '{enter}', { force: true });
  cy.wait(1000);
}

function listarPostsAdmin() {
  cy.visit(URL + '/ghost/#/posts');
}

function listarPostsBlog() {
  cy.visit(URL)
}