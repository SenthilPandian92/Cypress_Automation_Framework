/// <reference types="cypress"/>

describe("iterate over elements", () => {
    beforeEach(function(){
        cy.visit("https://automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    })
    it("Log information of all hair care products", () => {
        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            cy.log('index:'+index + ' : ' + $el.text())
        })
    })

    it("Add specific product to basket", () => {
        // cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
        //     if($el.text().includes('Eau Parfumee au The Vert Shampoo')){
        //         cy.wrap($el).click()
        //     }
        // })
       cy.selectProduct('Eau Parfumee au The Vert Shampoo');
    })

    it("Add another specific product to basket", () => {
       cy.selectProduct('Seaweed Conditioner');
    })

    it("Add another specific product to basket 2", () => {
       cy.selectProduct('Curls to straight Shampoo');
    })
})
