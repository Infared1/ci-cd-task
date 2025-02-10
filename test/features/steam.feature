Feature: Steam Download Test

  Scenario: Download Steam setup file
    Given I open the Steam main page
    When I click on the Valve link
    And I switch to the new tab
    Then The Valve page should be displayed
    When I switch back to the previous tab
    And I click on the "Install Steam" button
    Then The "Install Steam" page should be displayed
    When I click the "Install" button
    Then The "SteamSetup.exe" file should be downloaded successfully