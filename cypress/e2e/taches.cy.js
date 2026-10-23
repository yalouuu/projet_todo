describe('Création des tâches', () => {
  it('TACHE-03 - Refuser l’accès sans connexion', () => {
    cy.clearCookies();
    cy.clearLocalStorage();

    cy.visit('http://localhost:8080/task/new');

    cy.location('pathname').should('eq', '/');
    cy.get('input[name="title"]').should('not.exist');
    cy.contains('Bienvenue sur la Todo List').should('be.visible');
  });
});