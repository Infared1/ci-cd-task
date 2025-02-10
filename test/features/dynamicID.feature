Feature: Dynamic ID Test

    Scenario: Verify button identification without using ID
        Given I am on the 'Dynamic ID' webpage
        When I click on the button
        Then The button should not be identified using an ID
