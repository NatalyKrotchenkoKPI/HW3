import { loginPage } from '../../support/pages/loginPage';
import { homePage } from '../../support/pages/homePage';

describe('Login Tests', () => {
  beforeEach(function() {
    cy.fixture('users').then((data) => {
      this.users = data;
    });
  });

  it('Sign in with invalid password', function() {
    loginPage.visit();
    cy.generateRandomText(7).then((randomText) => {
        loginPage.login(this.users.validUser.email, randomText);
    });
  });
});