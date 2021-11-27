/* eslint-disable no-undef */
describe('Visiting the application, a user', () => {
  beforeEach(() => {
    // cy.intercept("GET", "https://newsapi.org/v2/top-headlines**").as("fetchData");
    cy.visit('/');
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

  it('is expected to return an array of data', () => {
    // cy.get("@fetchData").its("response.data.articles").should("be.an", "array");
  });

  describe('can see a collection of News Items and', () => {
    it('is expected to see 20 list items', () => {
      cy.get('[data-cy=news-list]').children().should('have.length', 20);
    });

    it.only('is expected to see first News Card with a picture, header, meta, description, publication date', () => {
      cy.get('[data-cy=news-1]').within(() => {
        cy.get('.image').should('be.visible');
        cy.get('.header').should('contain.text',
          'DBS Bank to launch cryptocurrency exchange after condemning Bitcoin a Ponzi scheme in 2017'
        ).should('be.visible');
        cy.get('.meta').should('contain.text', 'By: Lorenzo Stroe at FXStreet').should('be.visible');
        cy.get('.description').should('not.be.empty').should('be.visible');
        cy.get('.extra').should('contain.text', 'Published at $2020-12-10T20:29:20Z').should('be.visible');
      });
    });
  });
});
