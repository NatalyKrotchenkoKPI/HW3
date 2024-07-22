class ArticlePage {
    visit() {
      cy.get('.article-preview .preview-link').eq(2).click();
    }
  
    addComment(comment) {
      cy.get('[name="comment"]').type(comment);
      cy.contains('Post Comment').click();
    }
  
    getFollowAuthor() {
        return cy.get('button.btn-outline-secondary:contains("Follow")');
    }

    getUnfollowAuthor(){
        return cy.get('button.btn-secondary:contains("Unfollow")');
    }

    clickFollowButton() {
        this.getFollowAuthor().click();
    }

    verifyFollowButtonChanged() {
        this.getFollowAuthor().should('not.exist');
        this.getUnfollowAuthor().should('exist');
      }

    getFavoriteButton() {
        return cy.get('button.btn-outline-primary:contains("Favorite Article")');
    }
    
    getUnfavoriteButton() {
        return cy.get('button.btn-primary:contains("Unfavorite Article")');
    }
    
    clickFavoriteButton() {
        this.getFavoriteButton().click();
    }
    
    verifyFavoriteButtonChanged() {
        this.getFavoriteButton().should('not.exist');
        this.getUnfavoriteButton().should('exist');
    }
  }
  
  export const articlePage = new ArticlePage();
  