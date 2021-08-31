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

