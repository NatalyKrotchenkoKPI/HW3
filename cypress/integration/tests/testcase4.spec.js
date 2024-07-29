import { settingsPage } from '../../support/pages/settingsPage';
import { loginPage } from '../../support/pages/loginPage';
import { homePage } from '../../support/pages/homePage';

describe('Navigation Tests', () => {
  beforeEach(function () {
    cy.fixture('users').then((data) => {
      this.users = data;
    });
  });

  it('Verify clicking footer logo redirects to "Your Feed" page', function () {
    loginPage.visit();
    loginPage.login(this.users.validUser.email, this.users.validUser.password);
    cy.contains('a.nav-link.active', 'Your Feed').should('be.visible').then((element) => {
      expect(element).to.be.visible;
    });
    settingsPage.visit();
    settingsPage.clickFooterLogo();
    cy.url().should('eq', Cypress.config().baseUrl + '/');
  });
});
