Feature: Alert Tests

Scenario: Java Script Alert handling 
    Given I am on the 'JavaScript Alerts' page
    When I open js Alert
    And I accept Alert
    Then I should see the Alert message 'You successfully clicked an alert'

