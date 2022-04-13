/// <reference types="cypress"/>

describe("Test contact us form via automation test store", () => {
    before(function () {
        // cy.viewport(550, 750)
        cy.fixture('userDetails').as('user')
    })
    it("Should be able to submit a successful submission via contact us form",() => {
        cy.visit("https://automationteststore.com/");
        cy.get('.info_links_footer > :nth-child(5) > a').click().then(function (linkText) {
            cy.log("The selected option is : " + linkText.text())
        });
        //cy.xpath("(//*[contains(text(),'Contact')])[2]").click();
        //cy.visit("https://automationteststore.com/index.php?rt=content/contact");
        cy.get('@user').then((user) => {
            cy.get('#ContactUsFrm_first_name').type(user.first_name);
            cy.get('#ContactUsFrm_email').type(user.email);
        })
        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email');
        cy.get('#ContactUsFrm_enquiry').type("How to learn Cypress");
        //cy.xpath("(//button[@type='submit'])[1]").click({force:true});
        cy.get('.col-md-6 > .btn').click();
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')
        //console.log('Test has Completed');
        cy.log('Test has Completed');
    })
})