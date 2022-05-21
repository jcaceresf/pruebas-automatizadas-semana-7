import { faker } from "@faker-js/faker";
import { URL, LOGIN_EMAIL, LOGIN_PASSWORD } from "../env";

describe('Escenario 1:', function () {

  it('Al loggearse y crear un post, este está en la interfaz de admin', function () {
    const randomTitle = faker.random.alpha(Math.random() * 500)
    const randomBody = faker.lorem.lines()
    login();
    cy.wait(500);
    crearPost(randomTitle, randomBody);
    cy.wait(500);
    listarPostsAdmin().should('include.text', randomTitle)
  })
})

function crearPost(title, body) {
  cy.get("a[href='#/editor/post/']").then($links => {
    cy.wrap($links[0]).click({ force: true });
    cy.wait(500);
    cy.get("textarea[placeholder='Post title']").type(title, { force: true })
    cy.get("div[contenteditable='true']").type(body, { force: true })
    cy.get("header section").children('.gh-publishmenu').click().then(() => {
      cy.get(".gh-publishmenu-button").click().then(() => {
        cy.get(".modal-footer").children('.gh-btn-black').click()
      })
    }
    )
  });
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
  return cy.get('.gh-posts-list-item');
}