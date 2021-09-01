//Search Test Scenario
describe("Search test", () => {


  beforeEach(() => {
    cy.visit('/', {timeout: 80000})
    cy.log('Main page opened successfully')
    cy.server();
    cy.intercept("POST", '**/api/v2/flights/domestic/available/cheapest**').as('getFlighSearchResult')
  })

  // ignore errors from the site itself
  Cypress.on('uncaught:exception', () => {
    return false
  })


  afterEach(() => {
    // In firefox, blur handlers will fire upon navigation if there is an activeElement.
    // Since todos are updated on blur after editing,
    // this is needed to blur activeElement after each test to prevent state leakage between tests.
    cy.window().then((win) => {
      win.document.activeElement.blur()
    })
  })


  //select travel type 
  it.skip("selectTravelType", () => {
      cy.byTestId('domestic-link')
      cy.byTestId('international-link')
      cy.byTestId('train-link')
  })

  //check validity of increment/decrement passengers
  it("Should check increment/decrement passengers", () => {

    cy.byTestId('passengerPicker').click();

    //increase adults twice
    cy.incrementPassengers(0, 1, 2)
    //increase adults twice
    cy.decrementPassengers(0, 3, 2)

    //increase children once
    cy.incrementPassengers(1, 0, 1)
    //increase children once
    cy.decrementPassengers(1, 1, 1)

    //increase babies twice
    cy.incrementPassengers(2, 0, 1)
    //increase babies twice
    cy.decrementPassengers(2, 1, 1)
    
  })

  //Should alert error if required fields not be provided
  it("Should alert error for empty input for origin/destination", () => {
    
     //check requirement of origin input
     cy.searchTicket()
     cy.alertContainsText('لطفا مبدا را انتخاب کنید')

     //check requirement of destination input
     cy.visit('/', {timeout: 80000})
     cy.fillOrigin('ماکو')
     cy.searchTicket()
     cy.alertContainsText('لطفا مقصد را انتخاب کنید')
    
  })

  //Search should have results
  it('Can search the flights', () => {

    //Check if search button is loaded
    cy.contains('جستجو')
    cy.log('Search button found successfully')

    cy.searchAlibaba('تهران', 'مشهد', {adultCount : 1, childCount : 2, babyCount : 1})

    cy.wait("@getFlighSearchResult")

    const functionSearch = (index = 0) => {    
      cy.log('index: ' + index) 

      cy.get('div#available-columns__footer-0')
        .find('span')
        .invoke('text')
        .then((text) => {
          if (text.includes('تکمیل ظرفیت') && index < 2) {            
            cy.wait(500, { log: false })          
            cy.get('button.adjacent-days__next').click()                      
            functionSearch(index + 1)      
            
          } else {
            return
          }
        })}
      

        functionSearch()
    
  })

  //search should be done inside tasks in order to retry it by condition
  it.skip('searchAlibaba', () => {
    cy.task('searchAlibaba')

  })


})
