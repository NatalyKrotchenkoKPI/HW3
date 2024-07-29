import { homePage } from '../../support/pages/homePage';

describe('Navigation Tests', () => {
  it('Verify clicking "Home" link redirects to homepage', () => {
    cy.visit('/login');
    homePage.clickHomeLink();
    cy.url().then((url) => {
      expect(url).to.equal(Cypress.config().baseUrl + '/');
    });
  });
});
