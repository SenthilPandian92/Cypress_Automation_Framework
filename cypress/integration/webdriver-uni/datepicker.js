/// <reference types="Cypress"/>

describe("Test Datepicker via Webdriveruni", ()=> {
    it("select date from the datepicker", ()=>{
       cy.visit("http://www.webdriveruniversity.com/");
       cy.get('#datepicker').invoke('removeAttr', 'target').click({force:true});
       cy.get('#datepicker').click();

    //    let date = new Date()
    //    date.setDate(date.getDate())
    //    cy.log(date.getDate())  //get current date

    //    let date2 = new Date()
    //    date2.setDate(date2.getDate() + 5)
    //    cy.log(date2.getDate()) // get current date + 5

    var date =new Date();
    date.setDate(date.getDate() + 26);

    var futureYear = date.getFullYear();
    var futureMonth = date.toLocaleString("default", {month: "long"});
    var futureDay = date.getDate();

    cy.log('Future year to select: '+ futureYear);
    cy.log('Future month to select: '+ futureMonth);
    cy.log('Future day to select: '+ futureDay);

    function selectMonthandYear(){
        cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(CurrentDate => {
            if(!CurrentDate.text().includes(futureYear)){
                cy.get('.next').first().click();
                selectMonthandYear();
            }
        }).then(() => {
            cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(CurrentDate => {
                if(!CurrentDate.text().includes(futureMonth)){
                    cy.get('.next').first().click();
                    selectMonthandYear();
                }
            })
        })
    }
    function selectFutureDate(){
        cy.get('[class="day"]').contains(futureDay).click()
    }

    selectMonthandYear();
    selectFutureDate();

    })
})