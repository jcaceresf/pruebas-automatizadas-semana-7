import { URL } from '../env';
import { faker } from "@faker-js/faker";
import { crearPost, login } from "../functions";

describe('Escenario 13:', function () {

  it('crear post y verificar que la cantidad de posts mostrados a los usuarios es igual o menor a la cantidad de posts mostrados en el tablero de administrador', function () {
    let postTitle = faker.random.alpha(50)
    let postBody = faker.lorem.lines(20)

    login();
    cy.wait(1000);
    cy.visit(URL + '/ghost/#/posts');
    cy.wait(1000)
    crearPost(postTitle, postBody);
    cy.wait(1000)
    cy.get('[href^="#/editor/post/"].permalink').then($posts => {
      const numberOfPosts = $posts.length;
      cy.visit(URL + '/ghost/#/signout')
      cy.wait(500)
      cy.visit(URL).then(() => {
        cy.wait(1000)
        cy.get('.post-card').then($showPosts => {
          const numberOfPostShown = $showPosts.length;
          console.log(numberOfPosts, numberOfPostShown)
          expect(numberOfPosts >= numberOfPostShown).to.be.true
        })
      })
    })
  })
})

