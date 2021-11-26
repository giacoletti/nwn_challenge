/* eslint-disable no-undef */
describe('Visiting the application, a user', () => {
  beforeEach(() => {
    cy.visit('/')
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
    it('is expected to see 5 list items', () => {
      cy.get('[data-cy=news-list]').children().should('have.length', 5);
    });

    it('is expected to see first News Card with a picture, header, meta, description, publication date', () => {
      cy.get('[data-cy=news-1]').within(() => {
        cy.get('[data-cy=news-image-1]').should('be.visible');
        cy.get('[data-cy=news-header-1]').should('contain.text',
          'DBS Bank to launch cryptocurrency exchange after condemning Bitcoin a Ponzi scheme in 2017'
        ).should('be.visible');
        cy.get('[data-cy=news-meta-1]').should('contain.text', 'By: Lorenzo Stroe at FXStreet').should('be.visible');
        cy.get('[data-cy=news-description-1]').should('not.be.empty').should('be.visible');
        cy.get('[data-cy=news-publication-1]').should('contain.text', 'Published at $2020-12-10T20:29:20Z').should('be.visible');
      });
    });
  });
});

// What do we need to test? Brainstorm
// 
// 1. Page loads
// 2. The search bar has functionality
// 3. Test the menus in App.jsx