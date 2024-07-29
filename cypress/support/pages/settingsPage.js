class SettingsPage {
  visit() {
    cy.visit('/settings');
  }
  clickLogout() {
    cy.get('[class="btn btn-outline-danger"]').click();
  }
  clickFooterLogo() {
    cy.get('[class="logo-font"]').click();
  }
}
export const settingsPage = new SettingsPage();
