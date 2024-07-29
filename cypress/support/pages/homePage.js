class HomePage {
  visit() {
    cy.visit('/');
  }

  clickLogo() {
    cy.get('[class="navbar-brand"]').click();
  }

  clickHomeLink() {
    cy.get('nav > div > ul > li:first-of-type > a').click();
  }
  clickGlobalFeed() {
    cy.get('div.feed-toggle > ul > li:nth-child(2)').click();
  }
}

export const homePage = new HomePage();
