describe('Add Event Page', () => {
    it('should submit form and navigate to /events', () => {
      // access page
      cy.visit('http://localhost:3001/events/new');
  
      // add data
      cy.get('input[id="type"]').type('Conference');
      cy.get('input[id="location"]').type('New York');
      cy.get('textarea[id="description"]').type('Annual tech conference');
  
      // try submit 
      cy.intercept('POST', '/api/events', {
        statusCode: 201,
        body: { message: 'Event created successfully' }
      }).as('postEvent');
  
      cy.get('button[type="submit"]').click();
  
      // check API 
      cy.wait('@postEvent').its('request.body').should('deep.equal', {
        type: 'Conference',
        location: 'New York',
        description: 'Annual tech conference'
      });
  
      // check navegation
      cy.url().should('include', '/events');
    });
  });
  