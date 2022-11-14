describe('home page', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  it('the h1 contains the correct text', () => {
    cy.get('h1').contains('Biodiversity Connections')
  })

  it('has one navigation bar', () => {
    cy.get('nav').should('have.length', 1)
  })

  it('has correct navigation links', () => {
    cy.get('a[href="/"]')
  
    cy.get('a[href="/blog/1"]')

    cy.get('a[href="/biodiversity-singapore"]')

    cy.get('a[href="/about-us"]')

    cy.get('a[href="/open-science"]')
  })

  it('navigation links are clickable', () => {    
    cy.get('a[href="/"]').click()

    cy.get('a[href="/about-us"]').click()

    cy.get('a[href="/blog/1"]').click()

    cy.get('a[href="/biodiversity-singapore"]').click()

    cy.get('a[href="/open-science"]').click()
  })
})
