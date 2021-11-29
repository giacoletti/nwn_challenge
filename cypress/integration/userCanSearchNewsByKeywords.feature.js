describe('Visiting the application, a user can type a keyword in the search input and click "Search" button', () => {
  before(() => {
    cy.intercept('GET', 'https://newsapi.org/v2/everything**', {
      fixture: "news_search.json"
    }).as("fetchData");
    cy.visit('/');
    cy.get('[data-cy=nwn-search-input]').type('covid');
    cy.get('[data-cy=nwn-search-input]').within(() => {
      cy.get('.button').click();
    })
  });

  it('is expected to return an array of data', () => {
    cy.wait("@fetchData").its("response.body.articles").should("be.an", "array");
  });

  describe('can see news relative to the search', () => {
    it('is expected to see 20 list items', () => {
      cy.get('[data-cy=news-list]').children().should('have.length', 20);
    });

    it('is expected to see first News Card with a picture, header, meta, description, publication date', () => {
      cy.get('[data-cy=news-1]').within(() => {
        cy.get('.image').should('be.visible');
        cy.get('.header').should('contain.text',
          '4th Stimulus Check Update: The states offering checks and financial support').should('be.visible');
        cy.get('.meta').should('contain.text', 'By: marca.com at Marca').should('be.visible');
        cy.get('.description').should('contain.text',
          'States across the United States, from Arkansas to Washington, are taking the lead on offering financial aid with various giving out'
        ).should('be.visible');
        cy.get('.extra').should('contain.text', 'Published at 2021-11-28T10:22:32Z').should('be.visible');
      });
    });
  });
});