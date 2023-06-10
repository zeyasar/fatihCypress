/// <reference types = "cypress" >/
describe("insiderTest",()=>{
    it.only("test case 1" , ()=>{
        Cypress.on("uncaught:exception" , ()=>{
            return false
        });
        cy.visit("https://useinsider.com/")
        cy.url().should('include' , 'insider')
        cy.get('#wt-cli-accept-all-btn').click()
        cy.get('.navbar-toggler').click()
        cy.get(':nth-child(6) > #mega-menu-1').click()
        cy.get('a h5').contains("Careers").click()
        cy.get("#career-find-our-calling").should('be.visible')
        cy.get("#career-our-location").should('be.visible')
        cy.get("div.elementor-widget-container h2").contains("Life at Insider").should('be.visible')
        cy.get('div p.text-primary').contains("30").scrollIntoView()
        cy.get('.row > .btn').click({force:true})
        cy.get(':nth-child(23) > .job-image > .w-100 > .img-fluid').scrollIntoView()
        cy.get('a h3').contains("Quality Assurance").click({force:true})
        cy.get('.pl-2').scrollIntoView()
        cy.get('.btn-outline-secondary.rounded').click({force:true})
        cy.get("p.text-dark").scrollIntoView()
        cy.get('#filter-by-location').select("Istanbul, Turkey" , {force:true})
        cy.get('#filter-by-department').select("Quality Assurance" , {force:true})
        cy.get("span.position-department").should("include.text" , "Quality Assurance")
        cy.get("div.position-location").should("include.text" , "Istanbul, Turkey")
        cy.get('h3.mb-0').scrollIntoView()
        cy.get('a.btn.pt-2').should('be.visible').first().scrollIntoView().invoke('removeAttr' , 'target').click({force:true})
        cy.origin('https://jobs.lever.co' , ()=>{
            cy.url().should('include' , 'lever')
        })       

    })
    it.skip("open position page validations" , ()=>{
        Cypress.on('uncaught:exception' , ()=>{
            return false
        })
        cy.visit("https://useinsider.com/careers/open-positions/?department=qualityassurance")
        cy.get('#wt-cli-accept-all-btn').click()
        cy.get('#filter-by-location').select("Istanbul, Turkey" , {force:true})
        cy.get('#filter-by-department').select("Quality Assurance" , {force:true})
        cy.get('h3.mb-0').scrollIntoView()
        cy.get('a.btn.pt-2').should('be.visible').first().scrollIntoView().invoke('removeAttr' , 'target').click({force:true})
        cy.origin('https://jobs.lever.co' , ()=>{
            cy.url().should('include' , 'lever')
        })
    })
})