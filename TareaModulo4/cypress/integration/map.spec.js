describe('Map Component', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('should display the map', () => {
      cy.get('mgl-map').should('exist');
    });
  
    it('should show an alert when the marker is clicked', () => {
      cy.get('mgl-marker').click();
      cy.on('window:alert', (str) => {
        expect(str).to.equal('¡Marcador clicado!');
      });
    });
  
    it('should display tracking tags', () => {
      cy.get('mgl-marker').click();
      cy.get('div').contains('marker: 1'); // Asegúrate de que el texto coincida con lo que esperas
    });
  });