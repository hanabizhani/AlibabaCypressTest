# AlibabaCypressTest
## _Implement Cypress Test for search & contact-us_

[![N|Solid](https://myket.ir/app-icon/ir.alibaba_bf5c252f-8b06-4845-a137-6b432a694d62.png)](https://www.alibaba.ir)

   # ✨ PLEASE NOTE   THAT✨    
    I'M SENIOR IN SELENIUM WEB DRIVER
    BUT
    "NEVER EVER" USED CYPRESS BEFORE
    YESTERDAY I JUST RAN `npm install cypress` FOR THE FIRST TIME IN MY LIFE :)
    AND
    I'M HAPPY :) THAT THIS IS MY FIRST PROJECT IN CYPRESS, LEARNED AND DEVELOPED ONLY IN COUPLE OF HOURS

## What the test is doing
1. scenario_search_spec.js:
    - opens https://www.alibaba.ir and fills the data then click on the "جستجو" button
    - Wait until the results are finished
    - If no results were found, change search date to tomorrow and search again (until there is at least one result)
    
    >contains 2 test cases:
    *Should alert error if required fields not be provided
    *Search, which should have results
    
2. scenario_contactus_spec.js:
    - Scroll to the bottom of the page and click on "تماس با ما" in the footer. (This scrolldone as if the mouse was scrolling)
    
    >contains only 1 test case:
    *Scroll and click contact us

# What do you expect?

- **You expect me to detect the test scenarios and create comfortable test suites and test cases**
    * Actually, you can't find too many test cases. Trust me it was my fulltime working day and this is my first CYPRESS application. I didn't have much time to cover it
- **You expect me to have solutions for re-using cypress commands.**
    * This is the part I tried my best. I defined too many commands in command.js in order to save reusability
- **You expect me to handle some edge cases which demonstrate your abilities with cypress timeouts.**
    * I defined `defaultCommandTimeout` in cypress.json, I use `WaitUntil` and inline timeouts in order to handle that
    * Use `npm i -D cypress-wait-until` to install `WaitUntil`
- **You expect me to keep my test scenarios clean and of course reliable.**
    * Hope so :)
    
# Bonus
- **Write tests for other products (e.g., train, bus, etc.)**
    * Not so much time. Honestly it was the easiest part for me :(
- **Create visual tests (comparing images/screenshots)**
    * I searched about ` cypress-plugin-snapshots` plugin and `toMatchImageSnapshot()` method but no time to implement
- **Create a report based on the results of the tests being run**
    * Used Mochawesome in combination with mochawesome-report-generator and mochawesome-merge
    * Run this command to install `npm i --D mocha mochawesome mochawesome-merge mochawesome-report-generator`
    * Reports are generated in mochawesome-report folder
- **Handle browser crashes (retry tests if the browser crashes)**
    * command `"retries"` is added in `cypress.json` file in order to handle flaky tests


