describe('Applevis sanity tests', () => {
    it('Applevis main page title', () =>{
        cy.visit('https://applevis.com');
        cy.get('title').invoke('text').should('equal', 'AppleVis')
    });
});