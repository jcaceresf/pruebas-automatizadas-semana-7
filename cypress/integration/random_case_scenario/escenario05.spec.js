import { faker } from "@faker-js/faker";
import { URL, LOGIN_EMAIL, LOGIN_PASSWORD } from "../env";

describe('Escenario 5:', function () {

  it('Al loggearse, editar el título de un post y entrar como usuario, este se ha actualizado', function () {
    const randomTitle = faker.random.alpha(Math.random() * 500)

    login();
    cy.wait(500);
    editarPost(randomTitle);
    cy.wait(500);
    cy.wait(500);
    cy.visit(URL + '/ghost/#/signout')
    cy.wait(1000)
    cy.visit(URL)
    cy.get(`h2:contains("${randomTitle}")`).should('have.length', 1)
  })
})

function editarPost(title) {
  cy.get("a[href='#/posts/']").then($links => {
    cy.wrap($links[0]).click({ force: true });
    cy.wait(500);
    cy.get('[href^="#/editor/post/"].permalink').then($posts => {
      cy.wrap($posts[0]).click();
      cy.wait(500);
      cy.get("textarea[placeholder='Post title']").type('{selectAll}{del}').type(`${title}`, { force: true });
      cy.get("header section").children('.gh-publishmenu').click().then(() => {
        cy.get(".gh-publishmenu-button").click()
      }
      )
    })
  })
}

function login() {
  cy.visit(URL + '/ghost');
  cy.wait(1000);
  cy.get('.email').type(LOGIN_EMAIL, { force: true });
  cy.get('.password').type(LOGIN_PASSWORD + '{enter}', { force: true });
  cy.wait(1000);
}