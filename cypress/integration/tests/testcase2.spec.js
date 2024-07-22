import { homePage } from '../../support/pages/homePage';

describe('Navigation Tests', () => {
  it('Verify clicking "Home" link redirects to homepage', () => {
    cy.visit('/login');
    homePage.clickHomeLink();
    cy.url().should('eq', Cypress.config().baseUrl + '/');
  });
});
