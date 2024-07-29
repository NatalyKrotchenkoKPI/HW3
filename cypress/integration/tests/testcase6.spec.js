import { homePage } from '../../support/pages/homePage';
import { loginPage } from '../../support/pages/loginPage';
import { articlePage } from '../../support/pages/articlePage';

describe('Favorite Article Tests', () => {
  beforeEach(function () {
    cy.fixture('users').then((data) => {
      this.users = data;
    });
  });

  it('Verify adding article to the "Favorited Articles"', function () {
    loginPage.visit();
    loginPage.login(this.users.validUser.email, this.users.validUser.password);
    cy.get('a.nav-link.active').contains('Your Feed').should('be.visible').then((element) => {
      expect(element).to.be.visible;
    });
    homePage.clickGlobalFeed();
    articlePage.visit();
    articlePage.clickFavoriteButton();
    articlePage.verifyFavoriteButtonChanged();
  });
});