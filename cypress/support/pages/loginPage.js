class LoginPage {
  visit() {
    cy.visit('/login');
  }

  fillEmail(email) {
    cy.get('[name="email"]').type(username);
  }

  fillPassword(password) {
    cy.get('[name="password"]').type(password);
  }

  submit() {
    cy.get('button[type="submit"]').click();
  }

  login(username, password) {
    cy.get('[name="email"]').type(username);
    cy.get('[name="password"]').type(password);
    cy.get('button[type="submit"]').click();
  }

  verifyErrorMessage() {
    cy.contains('ul.error-messages', "email or password is invalid").should('be.visible');
  }
}

export const loginPage = new LoginPage();
