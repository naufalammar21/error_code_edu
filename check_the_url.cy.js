/// <reference types="cypress" />
describe('Browser Actions',() => {
    it('should load correct url',()=>{
        cy.visit('https://example.com',{ timeout: 10000})
    });

    it('should check correct url',() => {
        cy.url().should('include','example.com')

    });
});