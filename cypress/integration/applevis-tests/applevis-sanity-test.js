describe('Applevis sanity tests', () => {
    beforeEach(() => {
        cy.visit('https://applevis.com');
    });
    it('Applevis main page title', () => {
        cy.get('title').invoke('text').should('equal', 'AppleVis');
    });

    it('Open apps page', () => {
        cy.get("button[aria-label='Main Menu']").click();
        cy.get('a').contains('Apps').invoke('text').should('equal', 'Apps');
        cy.get('a').contains('Apps').click();
    })

    it('Open Podcast page', () => {
        cy.get("button[aria-label='Main Menu']").click();
        cy.get("button[title='More community resources']").click();
        cy.get('a').contains('Podcast').invoke('text').should('equal', 'Podcast');
        cy.get('a').contains('Podcast').click();
    })
});