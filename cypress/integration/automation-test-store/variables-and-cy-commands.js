/// <reference types="cypress"/>

describe("Varifying variables, cypress commands and jquery commads",()=>{
    it("Navigating to specific product pages",()=>{
     //The following will fail
        // cy.visit("https://automationteststore.com/");
        // const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup");
        // const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare");
        // makeupLink.click();
        // skincareLink.click();
     //The following will pass
        // cy.visit("https://automationteststore.com/");
        // const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup");
        // const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare");
        // makeupLink.click();
        // skincareLink.click();
      //Recommended approach
           cy.visit("https://automationteststore.com/");
           cy.get("a[href*='product/category&path=']").contains("Makeup");
           cy.get("a[href*='product/category&path=']").contains("Skincare");
    })
    it("Navigating to specific product pages",()=>{
        cy.visit("https://automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Makeup").click();
    
        //Following code will fail
        // const header = cy.get("h1 .maintext");
        // cy.log(header.text());

        cy.get("h1 .maintext").then(($headerText => {
            const headerText = $headerText.text()
            cy.log("Found header text: "+ headerText)
            expect(headerText).eql('Makeup')
        }))
    })
    it.only("Validate properties of the contact us page",()=>{
        cy.visit("https://automationteststore.com/index.php?rt=content/contact");
        // uses cypress command and chaining
        cy.contains('#ContactUsFrm','Contact Us Form').find('#field_11').should('contain', 'First name:')
        //query Approach
        cy.contains('#ContactUsFrm','Contact Us Form').then(text=>{
          const firstNameText = text.find('#field_11').text()
          expect(firstNameText).to.contain('First name:')
        })
        //Embedded commands(Closure)
        cy.get('#field_11').then(fnText =>{
            cy.log(fnText.text())
            cy.log(fnText)
        })
    })

})
