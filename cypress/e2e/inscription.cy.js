describe('Inscription', () => {
    it('INS-01 - Inscription avec des données valides', () => {
        const email = 'test-' + Date.now() + '@example.com';
        const password = 'testTodo!2026';

        cy.clearCookies();
        cy.clearLocalStorage();
        cy.visit('http://localhost:8080/register');

        cy.get('[name="firstname"]').type('Utilisateur');
        cy.get('[name="lastname"]').type('Test');
        cy.get('[name="email"]').type(email);
        cy.get('[name="password"]').type(password);
        cy.get('[name="confirm-password"]').type(password);
        cy.get('input[value="Inscription"]').click();

        cy.contains('Le compte : ' + email + ' a été ajouté en BDD')
            .should('be.visible');

        cy.clearCookies();
        cy.visit('http://localhost:8080/login');

        cy.get('[name="email"]').type(email);
        cy.get('[name="password"]').type(password);
        cy.get('input[value="Connexion"]').click();

        cy.contains('Les informations de connexion sont incorrectes')
            .should('not.exist');

        cy.visit('http://localhost:8080/task/activeall');

        cy.location('pathname').should('eq', '/task/activeall');
        cy.get('input[value="Connexion"]').should('not.exist');
    });

    it('INS-02 - Inscription avec un email vide', () => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.visit('http://localhost:8080/register');

        cy.get('[name="firstname"]').type('Utilisateur');
        cy.get('[name="lastname"]').type('Test');
        cy.get('[name="email"]').clear();
        cy.get('[name="password"]').type('testTodo!2026');
        cy.get('[name="confirm-password"]').type('testTodo!2026');
        cy.get('input[value="Inscription"]').click();

        cy.contains('Veuillez remplir tous les champs du formulaire')
            .should('be.visible');

        cy.contains('a été ajouté en BDD').should('not.exist');
        cy.location('pathname').should('eq', '/register');
    });

    it('INS-03 - Inscription avec deux mots de passe différents', () => {
        const email = 'refus-' + Date.now() + '@example.com';

        cy.clearCookies();
        cy.clearLocalStorage();
        cy.visit('http://localhost:8080/register');

        cy.get('[name="firstname"]').type('Utilisateur');
        cy.get('[name="lastname"]').type('Test');
        cy.get('[name="email"]').type(email);
        cy.get('[name="password"]').type('testTodo!2026');
        cy.get('[name="confirm-password"]').type('AutreTodo!2026');
        cy.get('input[value="Inscription"]').click();

        cy.contains('Les 2 mots de passe ne sont pas identiques')
            .should('be.visible');

        cy.contains('a été ajouté en BDD').should('not.exist');

        cy.clearCookies();
        cy.visit('http://localhost:8080/login');

        cy.get('[name="email"]').type(email);
        cy.get('[name="password"]').type('testTodo!2026');
        cy.get('input[value="Connexion"]').click();

        cy.contains('Les informations de connexion sont incorrectes')
            .should('be.visible');
    });
});