Feature: Login Test

  Scenario: Successful user login
    Given User is on the login page
    When User enters login "user@example.com" and password "password123"
    Then User is redirected to the homepage with greeting "Welcome, user@example.com!"

  Scenario: Unsuccessful login with wrong credentials
    Given User is on the login page
    When User enters wrong credentials
    Then User sees the error message "Wrong credentials"