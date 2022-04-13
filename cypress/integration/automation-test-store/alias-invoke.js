/// <reference types="cypress"/>

describe("alias and Invoke", () => {
    it("Validate a specific hair care product", () => {
        cy.visit("https://automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
        cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('productThumbnail');
        cy.get('@productThumbnail').its('length').should('be.gt', 5);
        cy.get('@productThumbnail').should('include', 'Seaweed Conditioner');  
    })
    it("Validate product thumbnail", () => {
        cy.visit("https://automationteststore.com/");
        cy.get('.thumbnail').as('productThumbnail');
        cy.get('@productThumbnail').should('have.length', '16');
        cy.get('@productThumbnail').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart');
    })
    it("Calculate total of normal and sale products", () => {
        cy.visit("https://automationteststore.com/");
        //cy.get('.thumbnail').as('productThumbnail');
        // cy.get('@productThumbnail').find('.oneprice').each(($el, index, $list) => {
        //       cy.log($el.text())
        // })
        cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice')
        cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice')

        var itemsTotal = 0;
        cy.get('@itemPrice').then($linkText => {
            var itemPrice = $linkText.split('$');
            var itemPriceTotal = 0;
            var i;
            for(i=0; i <itemPrice.length; i++){
                cy.log(itemPrice[i]);
                itemPriceTotal += Number(itemPrice[i]);
            }
            itemsTotal += itemPriceTotal;
            cy.log("Non sale price items total :" + itemPriceTotal);
        })

        cy.get('@saleItemPrice').then($linkText => {
            var saleItemPrice = $linkText.split('$');
            var saleItemPriceTotal = 0;
            var j;
            for(j=0; j <saleItemPrice.length; j++){
                cy.log(saleItemPrice[j]);
                saleItemPriceTotal += Number(saleItemPrice[j]);
            }
            itemsTotal += saleItemPriceTotal;
            cy.log("Sale price items total :" + saleItemPriceTotal);
        })
        .then(()=>{
            cy.log("The total price of all products: "+ itemsTotal)
            expect(itemsTotal).to.equal(648.5);
        })
    });
});
