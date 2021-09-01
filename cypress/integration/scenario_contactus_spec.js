describe("Contact-us test", () => {

  
    beforeEach(() => {
      cy.visit('/', {timeout: 80000})
      cy.log('Main page opened successfully')
    })

    // ignore errors from the site itself
    Cypress.on('uncaught:exception', () => {
        return false
    })


    it("Scroll and click contact us", 
    () => {
        
        //Scroll into contact-us link and click
        cy.get('ul.site-footer__list.multipart')
            .each($li => { 
                cy.wrap($li)                
                .contains('تماس با ما') 
                .scrollIntoView({ duration: 2000 })
                .click()
        })

        //check if contact-us page loaded successfully
        cy.contains('فرم تماس' , { timeout: 10000 })

    })



})