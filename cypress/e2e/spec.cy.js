describe('cafe user flows', () => {
  beforeEach(() => {
    cy.fixture('reservationsData.json');
    cy.intercept('GET', 'http://localhost:3001', { fixture: 'reservationsData.json' });
    cy.visit('http://localhost:3000');
  });

  it('should display reservations', () => {
    cy.get('.resy-container').find('.cards').should('have.length', 9);
  });
});