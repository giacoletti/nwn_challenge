/* eslint-disable no-undef */
describe('Visiting the application, a user', () => {
  before(() => {
    cy.intercept("GET", "https://newsapi.org/v2/top-headlines**", {
      fixture: "news_index.json"
    }).as("fetchData");
    cy.visit('/');
  });
  
  it('is expected to return an array of data', () => {
    cy.wait("@fetchData").its("response.body.articles").should("be.an", "array");
  });

  it('is expected to see "nwn" logo and a search input in the top menu', () => {
    cy.get('[data-cy=nwn-menu]').within(() => {
      cy.get('[data-cy=nwn-logo]').should('be.visible');
      cy.get('[data-cy=nwn-search-input]').should('be.visible');
    })
  });

  it('is expected to see a header "News Wire Network"', () => {
    cy.get('[data-cy=nwn-header]').should('contain.text', 'News Wire Network')
      .should('be.visible');
  });

  it('is expected to see a subheader "News from around the world"', () => {
    cy.get('[data-cy=nwn-subheader]').should('contain.text', 'News from around the world')
      .should('be.visible');
  });

  describe('can see a collection of News Items and', () => {
    it('is expected to see 20 list items', () => {
      cy.get('[data-cy=news-list]').children().should('have.length', 20);
    });

    it('is expected to see first News Card with a picture, header, meta, description, publication date', () => {
      cy.get('[data-cy=news-1]').within(() => {
        cy.get('.image').should('be.visible');
        cy.get('.header').should('contain.text', 'The best developers team ever').should('be.visible');
        cy.get('.meta').should('contain.text', 'By: Love and Giovanni at New York Times').should('be.visible');
        cy.get('.description').should('contain.text',
          'We just found out how to build fantastic React applications').should('be.visible');
        cy.get('.extra').should('contain.text', 'Published at 2030-11-27T20:34:49Z').should('be.visible');
      });
    });
  });
});
