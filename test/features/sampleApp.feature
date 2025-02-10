Feature: Sample App Test

    Scenario: The user is login successfully
        Given I am on the 'Sample App' webpage
        When I enter the user name in User Name input
            And I enter the password in Password input
            And I click the "Login" button
        Then The user should see the welcome message