// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


/*
    Increase passenger number by passengerCount
    passengerType=0 --> Adults
    passengerType=1 --> Children
    passengerType=2 --> Babies
*/

import 'cypress-wait-until';


//inrement or decrement passengers based on datatestID
function incDecPassenger(passengerType, defaultValue, count, datatestID) {
    
    //first check default values
    cy.byTestId('passengerPickerValue')
        .eq(passengerType)
        .should($el => expect($el.text().trim()).to.equal(defaultValue.toString()))
    
    
    //click on increment/decrement button `count` times
    for(let n = 0; n < count; n++){
        cy.byTestId(datatestID)
            .eq(passengerType)
            .click()
    }

    count = (datatestID == 'passengerPickerValueIncrease') ? count : (-1 * count)

    //check the value after increment/decrement
    cy.byTestId('passengerPickerValue')
        .eq(passengerType)
        .should($el => expect($el.text().trim()).to.equal((defaultValue+count).toString()))

}

Cypress.Commands.add('incrementPassengers', (passengerType, currentValue, count) =>{
    incDecPassenger(passengerType, currentValue, count, 'passengerPickerValueIncrease')
})

Cypress.Commands.add('decrementPassengers', (passengerType, currentValue, count) =>{
    incDecPassenger(passengerType, currentValue, count, 'passengerPickerValueDecrease')
})



function fillOriginDestination(dataTestID, value){
    cy.byTestId(dataTestID)
    .click()
            .within(() => {
                cy.get('div.multitab-picker__dropdown.v-dropdown.fade.open').each($li => {
                    cy.wrap($li)        
                    .contains(value)    
                    .click()                
                })
            })

     cy.byTestId(dataTestID).find('ul').children('.active')
    .should($el => expect($el.text().trim()).to.equal(value))
}

Cypress.Commands.add(
    'byTestId',
    (id) =>
      cy.get(`[data-test="${id}"]`)
  );

Cypress.Commands.add('searchTicket', () =>{
    cy.byTestId('search')
     .click()
})


Cypress.Commands.add('fillOrigin', (textValue) => {
    fillOriginDestination('originPicker', textValue)
})

Cypress.Commands.add('fillDestination', (textValue) => {
    fillOriginDestination('destinationPicker', textValue)
})

Cypress.Commands.add('alertContainsText', (textValue) => {
    cy.get('div#__layout').within(() => {
        cy.get('div')
          .find('[data-test="alibabaAlertText"]')
          .contains(textValue)
     })
})


Cypress.Commands.add('searchAlibaba', (originP, destination, {adultCount, childCount, babyCount}) => {

    //TODO: c1,c2,c3 should be a class object 
    cy.log('Search command called with parameters: ', 
    originP, destination, adultCount, childCount, babyCount)

    //select origin
    cy.fillOrigin(originP)

    //select destination
    cy.fillDestination(destination)

    //check if calendar is opened
    cy.get('[data-testid=datapicker-modal-submit-button]')
    .should('be.visible')

    //select today as departing date
    cy.get('div.flex.flex-column.calendar__day__content.has-tooltip')
    .eq(0)
    .click()
    .get('[data-testid=datapicker-modal-submit-button]')
    .click()

    //check if passenger picker dialog is opened
    cy.get('[data-test=passengerPickerValueIncrease]')

    //Adult
    //let decrement passengerCount by 1 for adults
    //Because by default 1 adult person is selected
    cy.incrementPassengers(0, 1, adultCount--)

    //Child
    cy.incrementPassengers(1, 0, childCount)

    //Baby
    cy.incrementPassengers(2, 0, babyCount)

    //click on search button
    cy.searchTicket()

})
  
