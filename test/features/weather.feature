Feature: Weather Search

    Scenario: Should display correct weather page after searching and selecting a city
        Given I am on the main page
        When I accept the policy
            And I search for "New York" city
            And I select the first search result
        Then I should see the weather page for "New York"
            And I see the header location should be "New York"