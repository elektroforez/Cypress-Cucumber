Feature: Messaging pricing download form on Telnyx website

    Scenario: As a user, I cannot submit the form with empty Name field TX_TC_14
        Given I am on the Messaging pricing page
        When I submit the download form
        Then I should see "This field is required." under the "First Name" input

    Scenario: As a user, I cannot submit the form with empty Last Name field TX_TC_15
        Given I am on the Messaging pricing page
        When I fill in first name
        And I submit the download form
        Then I should see "This field is required." under the "Last Name" input