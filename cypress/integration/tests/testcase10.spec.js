import { homePage } from '../../support/pages/homePage';
import { newArticlePage } from '../../support/pages/newArticlePage';
import { randomData } from '../../fixtures/random_data';
import { loginPage } from '../../support/pages/loginPage';

describe('Publish Article Tests', () => {
  beforeEach(function () {
    cy.fixture('users').then((data) => {
      this.users = data;
    });
  });

  it('Verify publishing new article', function () {
    loginPage.visit();
    cy.url().then((url) => {
      expect(url).to.equal(Cypress.config().baseUrl + '/login');
    });
    loginPage.login(this.users.validUser.email, this.users.validUser.password);
    newArticlePage.clickNewArticle();
    cy.generateRandomText(7).then((randomText) => {
      newArticlePage.fillTitle(randomText);
    });

    cy.generateRandomText(10).then((randomText) => {
      newArticlePage.fillArticleAbout(randomText);
    });

    cy.generateRandomText(15).then((randomText) => {
      newArticlePage.fillArticleBody(randomText);
    });

    cy.generateRandomText(5).then((randomText) => {
      newArticlePage.fillArticleTags(randomText);
    });

    newArticlePage.clickPublishArticle();
    cy.wait(5000);
    cy.url().should('include', 'article');
  });
});
