Feature: Wiki Test

    Scenario: Search for "Albert Einstein" and download page as PDF
        Given I am on the Wikipedia main page
        Then The Wikipedia main page should be opened
    
        When I select the English language
        And I type "Albert Einstein" in the search input and click the search button
        Then The "Albert Einstein" webpage is opened
    
        When I click on the Tools dropdown
        And I click on the "Download as PDF" link
        Then The "Download PDF" page is opened
    
        When I click on the "Submit" button
        Then The file should be downloaded successfully

