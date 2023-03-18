describe('Applevis sanity tests', () => {
    it('Applevis main page title', () => {
        cy.visit('https://applevis.com');
        cy.get('title').invoke('text').should('equal', 'AppleVis');
    });

    it('Open apps page', () =>{
        cy.visit('https://applevis.com');
        cy.get("button[aria-label='Main Menu']").click();
        cy.get('a').contains('Apps').invoke('text').should('equal', 'Apps');
        cy.get('a').contains('Apps').click();
    })
});