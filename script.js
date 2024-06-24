//your JS code here. If required.
cy.get('button').first().click().then(() => {
  cy.get('.modal').should('be.visible');
  cy.get('.btn-close').click().then(() => {
    cy.get('.modal').should('not.be.visible');
  });
});
