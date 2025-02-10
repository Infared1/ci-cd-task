Feature: Add/Remove Elements Test

Scenario: Add and remove elements
    Given I am on the 'Add/Remove Elements' page
    When I click the "Add Element" button
    Then I should see a that delete button is visible
    When I click "Delete" button
    Then I should see that Delete button is not visible
    