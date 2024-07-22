import { settingsPage } from '../../support/pages/settingsPage';
import { loginPage } from '../../support/pages/loginPage';
import { homePage } from '../../support/pages/homePage';

describe('Navigation Tests', () => {
    beforeEach(function() {
        cy.fixture('users').then((data) => {
          this.users = data;
        });
      });

  it('Verify clicking footer logo redirects to "Your Feed" page', function() {
    loginPage.visit();
    loginPage.login(this.users.validUser.email, this.users.validUser.password);
    settingsPage.visit();
    settingsPage.clickFooterLogo();
    cy.url().should('eq', Cypress.config().baseUrl + '/');
  });
});
