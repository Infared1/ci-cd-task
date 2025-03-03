Feature: Click Events Test

  Scenario: text is displayed
    Given I am on 'Click Events' page
    When I click on Cat button
    Then I see the successful message "Meow!"
