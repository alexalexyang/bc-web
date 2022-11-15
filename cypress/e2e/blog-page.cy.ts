describe('blog', () => {
    it('blog page contains correct header', () => {  
        cy.visit('http://localhost:3000/blog/1') 
        
        cy.url().should('include', '/blog/1')

        cy.get('h1').contains('Blog')
    })
})

export {}
