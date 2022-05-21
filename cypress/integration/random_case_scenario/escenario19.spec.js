import { URL, LOGIN_EMAIL, LOGIN_PASSWORD, NEW_PASSWORD } from "../env";
import { login, crearPost, publicarPost } from "../functions";
import { faker } from "@faker-js/faker";

describe('Escenario 19:', function () {

  it('Al eliminar cambiar la contraseña, es posible usar la nueva para loggearse', function () {
    let postTitle = faker.random.alpha(500)
    let postBody = faker.lorem.lines(100)
    
    login();
    cy.wait(1000);
    cy.visit(URL + '/ghost/#/editor/post');
    cy.wait(1000);
    cy.get('.gh-editor-title').type(postTitle, { force: true });
    cy.get('.koenig-editor__editor-wrapper').find('[contenteditable]').type(postBody);
  })
})