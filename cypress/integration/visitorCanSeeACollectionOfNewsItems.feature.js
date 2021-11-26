/* eslint-disable no-undef */
describe('User can see a news feed', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('is expected to display "nwn" logo in the top menu', () => {
    cy.get('[data-cy=nwn-logo]').should('be.visible');
  });
});

// What do we need to test? Brainstorm
// 
// 1. Page loads
// 2. The search bar has functionality
// 3. Test the menus in App.jsx