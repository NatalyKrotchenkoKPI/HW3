import { settingsPage } from '../../support/pages/settingsPage';
import { homePage } from '../../support/pages/homePage';
import { loginPage } from '../../support/pages/loginPage';

describe('Logout Tests', () => {
    beforeEach(function() {
        cy.fixture('users').then((data) => {
          this.users = data;
        });
      });

  it('Logout', function() {
    loginPage.visit();
    loginPage.login(this.users.validUser.email, this.users.validUser.password);
    settingsPage.visit();
    settingsPage.clickLogout();
    cy.get('.nav-link').contains('Sign in').should('be.visible');
  });
});
