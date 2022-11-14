describe('hamburger menu', () => {
    it('shows mobile menu', () => {
        cy.visit('http://localhost:3000/') 
        cy.viewport(639, 800)
        cy.get('nav').children().eq(0).should('be.visible')
    })

    it('shows nav bar on ipad-mini', () => {
        cy.visit('http://localhost:3000/') 
        cy.viewport('ipad-mini')
        cy.get('nav').children().eq(0).should('not.be.visible')
        cy.get('nav').children().eq(1).should('be.visible')
    })

    it('mobile menu should show correct aria-labels', () => {
        cy.visit('http://localhost:3000/') 
        cy.viewport(639, 800)
        cy.get("nav")
            .children()
            .eq(0)
            .should('be.visible')
            .get("button")
            .should('have.attr', 'aria-label', 'Click to open menu')
            .click()
        
        cy.get("nav")
            .children()
            .eq(0)
            .should('be.visible')
            .get('button')
            .should('have.attr', 'aria-label', 'Click to close menu')
    })

    it('mobile menu should show navigation links when opened', () => {
        cy.visit('http://localhost:3000/') 
        cy.viewport(639, 800)
        cy.get("nav")
            .children()
            .eq(0)
            .should('be.visible')
            .get('button')
            .should('have.attr', 'aria-label', 'Click to open menu')
            .click()
        
        cy.get("nav")
            .children()
            .eq(0)
            .should('be.visible')
            .children()
            .get('a')
            .should('be.visible')
    })
})