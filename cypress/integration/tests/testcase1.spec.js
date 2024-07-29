import { homePage } from '../../support/pages/homePage';

describe('Navigation Tests', () => {
  it('Verify clicking header logo redirects to homepage', () => {
    cy.visit('/login');
    homePage.clickLogo();
    cy.url().then((url) => {
      expect(url).to.equal(Cypress.config().baseUrl + '/');
    });
  });
});
