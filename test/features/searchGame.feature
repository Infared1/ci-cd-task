Feature: Search Game Test

    Scenario: Verify the first result is the expected one
        Given I open the Steam main page
        When I search for the game "Counter-Strike"
            And I see that the Search page is displayed
            And I see the search results are displayed
        Then The first result should be the "Counter-Strike"