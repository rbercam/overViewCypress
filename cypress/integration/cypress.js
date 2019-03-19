/// <reference types="Cypress" />

function takeScreeshot(name){
    //cy.exec('cd cypress/screenshots && rm -R cypress.js')
   //cy.exec('pwd')
    cy.screenshot(name)
}

describe("visita Google", function(){

    it("Pesquisar Rafael Berçam", function(){
        cy.viewport(1000,900)
        cy.visit('/')
        cy.get('.gLFyf')
        .type(`${Cypress.env('firstName')} ${Cypress.env('secondName')}`)
        .type('{enter}')
        cy.contains('Rafael Berçam – Medium')
        takeScreeshot('rafaelbercam')
    })
})


