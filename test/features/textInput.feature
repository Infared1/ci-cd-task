Feature: Text Input Test

    Scenario: Verify that the button name is changed when the text is entered
        Given I am on the "Text Input" webpage
        When I enter "Name" into the text input
        And I click the updating button
        Then I should see that button name is changed to "Name"