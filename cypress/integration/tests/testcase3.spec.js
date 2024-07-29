import { loginPage } from '../../support/pages/loginPage';
import { homePage } from '../../support/pages/homePage';

describe('Login Tests', () => {
  beforeEach(function() {
    cy.fixture('users').then((data) => {
      this.users = data;
    });
  });

  it('Sign in with valid data', function() {
    loginPage.visit();
    loginPage.login(this.users.validUser.email, this.users.validUser.password);
    cy.contains('a.nav-link.active', 'Your Feed').should('be.visible').then((element) => {
      expect(element).to.be.visible;
    });
  });
});
