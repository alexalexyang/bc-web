describe('navigation', { defaultCommandTimeout: 15000 }, () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('navigation links direct to correct home page', () => {   
        cy.get('a[href="/"]').click()

        cy.url().should('include', '/')

        cy.get('h1').contains('Biodiversity Connections')
    })

    it('navigation links direct to correct about us page', () => {   
        cy.get('a[href="/about-us"]').click()

        cy.url().should('include', '/about-us')

        cy.get('h1').contains('About us')
    })


    it('navigation links direct to correct open science page', () => {   
        cy.get('a[href="/open-science"]').click()

        cy.url().should('include', '/open-science')

        cy.get('h1').contains('Open Science')
    })


    it("navigation links direct to correct biodiversity singapore page", () => {   
        cy.get('a[href="/biodiversity-singapore"]').click()

        cy.url().should('include', '/biodiversity-singapore')

        cy.get('h1').contains('Biodiversity Singapore')
    })
})

export {}
  