class NewArticlePage {
    visit() {
        cy.visit('/editor');
    }
    clickNewArticle(){
        cy.get('a.nav-link[href="/editor"]').click();
    }
  
    fillTitle(title) {
      cy.get('[name="articleTitle"]').type(title);
    }

    fillArticleAbout(description) {
        cy.get('[name="description"]').type(description);
    }
    
    fillArticleBody(body) {
        cy.get('[name="body"]').type(body);
    }

    fillArticleTags(tags) {
        cy.get('[name="tags"]').type(tags);
    }

    clickPublishArticle() {
      cy.get('[class="btn btn-lg pull-xs-right btn-primary"]').click();
    }
   
  }
  
  export const newArticlePage = new NewArticlePage();
  