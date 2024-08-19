() => {
  // Click the first button to open the modal
  cy.get('button').first().click();

  // Ensure the modal becomes visible
  cy.get('.modal').should('be.visible');

  // Click the close button
  cy.get('.btn-close').click();

  // Wait for the modal to disappear and confirm it's no longer in the DOM
  cy.get('.modal').should('not.exist');
}
