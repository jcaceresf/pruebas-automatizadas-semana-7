import { faker } from "@faker-js/faker";
import { URL } from "../env";

describe('Escenario 4', function () {

  it('Al entrar como usuario al blog y abrir un post, su detalle lleva el mismo título', function () {
    listarPostsBlog();
    cy.wait(1000);
    abrirPostYCompararTitulos();
  })
})

function abrirPostYCompararTitulos() {
  cy.get(".post-card-content-link:first header h2").invoke('text').then((text1) => {
    cy.get(".post-card-content-link:first").click()

    cy.get('.article-title').invoke('text').should((text2) => {
      expect(text1).to.be.eq(text2)
    })
  })
}

function listarPostsBlog() {
  cy.visit(URL)
}