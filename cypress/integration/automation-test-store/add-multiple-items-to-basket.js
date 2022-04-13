import AutoStore_Homepage_PO from "../../support/pageObjects/automation-test-store/AutoStore_Homepage_PO"
import AutoStore_HairCare_PO from "../../support/pageObjects/automation-test-store/AutoStore_HairCare_PO"
/// <reference types="cypress"/>

describe("Add multiple items to basket", () => {
   const autoStore_Homepage_PO = new AutoStore_Homepage_PO();
   const autoStore_HairCare_PO = new AutoStore_HairCare_PO();

    before(function(){
        cy.fixture("products").then(function(data){
          globalThis.data = data;
        });
    });
    beforeEach(function() {
        cy.clearLocalStorage();
        cy.clearCookies();
        autoStore_Homepage_PO.accessHomePage();
        autoStore_Homepage_PO.clickOn_HairCare_Link();
        //cy.visit("https://automationteststore.com/");
        //cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    });

    it("Add specific items to basket", () => {
        // globalThis.data.productName.forEach(function(element){
        //     cy.addProductToBasket(element)
        // })
        autoStore_HairCare_PO.addHairCareProductsToBasket();
    });
 });