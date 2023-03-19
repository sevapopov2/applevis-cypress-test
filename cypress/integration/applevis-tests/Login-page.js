describe('Applevis Log in page tests', () => {
    beforeEach(() => {
        cy.visit('https://applevis.com')
        cy.get("button[aria-label='Main Menu']").click()
        cy.get('a').contains('Log in').click()
    })

    it('Check Email and Password fields', () => {
        cy.get("input[id='edit-name']").type('Fluffyfluffy@gmail.com')
        cy.get("input[id='edit-name']").invoke('val').should('equal', 'Fluffyfluffy@gmail.com')
        cy.get("input[id='edit-pass']").type('kvakvakvakvakva')
        cy.get("input[id='edit-pass']").invoke('val').should('equal', 'kvakvakvakvakva')
    })
})