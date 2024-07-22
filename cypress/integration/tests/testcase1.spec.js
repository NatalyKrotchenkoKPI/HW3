import { homePage } from '../../support/pages/homePage';

describe('Navigation Tests', () => {
  it('Verify clicking header logo redirects to homepage', () => {
    cy.visit('/login');
    homePage.clickLogo();
    cy.url().should('eq', Cypress.config().baseUrl + '/');
  });
});
