Feature: Contact us page form on Telnyx website

    Scenario: As a user, I cannot submit the form with empty fields (TX_TC_1)

        Given I am on the contact page
        When I click submit button
        Then I should see a flash message saying "This field is required." under the "How can we help?" field

    Scenario: As a user, I cannot submit the form with empty Name field TX_TC_2

            Given I am on the contact page
            When I select "Support" option in "How can we help?" dropdown
            And I fill in form without "Name" field
            And I click submit button
            Then I should see a flash message saying "This field is required." under the "Name" field

    Scenario: As a user, I cannot submit the form with empty Last name field TX_TC_3

            Given I am on the contact page
            When I select "Support" option in "How can we help?" dropdown
            And I fill in form without "Last name" field
            And I click submit button
            Then I should see a flash message saying "This field is required." under the "Last name" field

    Scenario: As a user, I cannot submit the form with empty Business email field TX_TC_4

            Given I am on the contact page
            When I select "Support" option in "How can we help?" dropdown
            And I fill in form without "Business email" field
            And I click submit button
            Then I should see a flash message saying "Must be valid email. example@yourdomain.com" under the "Business email" field

     Scenario: As a user, I cannot submit a form with invalid email (TX_TC_5)
            Given I am on the contact page
            When I select "Support" option in "How can we help?" dropdown
            And I fill in form without "Business email" field
            And I submit form with invalid email
            Then I should see a flash message saying "Must be valid email. example@yourdomain.com" under the "Business email" field
    
    Scenario: As a user, I cannot submit the form with empty Company website field TX_TC_6

            Given I am on the contact page
            When I select "Support" option in "How can we help?" dropdown
            And I fill in form without "Company website" field
            And I click submit button
            Then I should see a flash message saying "This field is required." under the "Company website" field

    Scenario: As a user, I cannot submit the form with empty Please describe your request field TX_TC_7

            Given I am on the contact page
            When I select "Support" option in "How can we help?" dropdown
            And I fill in form without "Please describe your request" field
            And I click submit button
            Then I should see a flash message saying "This field is required." under the "Please describe your request" field

    Scenario: As a user, I cannot submit the form with empty How did you hear about Telnyx? field TX_TC_8

            Given I am on the contact page
            When I select "Support" option in "How can we help?" dropdown
            And I fill in form without "How did you hear about Telnyx?" field
            And I click submit button
            Then I should see a flash message saying "This field is required." under the "How did you hear about Telnyx?" field

    Scenario: As a user, I cannot submit the form with empty Primary Product Interest field TX_TC_9

            Given I am on the contact page
            When I select "Sales Inquiry" option in "How can we help?" dropdown
            And I fill in form without "How did you hear about Telnyx?" field
            And I click submit button
            Then I should see a flash message saying "This field is required." under the "Primary Product Interest" field

    Scenario: As a user, I cannot submit the form with empty What is your estimated monthly spend? field TX_TC_10

            Given I am on the contact page
            When I select "Sales Inquiry" option in "How can we help?" dropdown
            And I fill in form without "What is your estimated monthly spend?" field
            And I click submit button
            Then I should see a flash message saying "This field is required." under the "What is your estimated monthly spend?" field

    Scenario: As a user, I cannot submit the form with empty How do you plan to use Telnyx? field TX_TC_11

            Given I am on the contact page
            When I select "Sales Inquiry" option in "How can we help?" dropdown
            And I fill in form without "How do you plan to use Telnyx?" field
            And I click submit button
            Then I should see a flash message saying "This field is required." under the "How do you plan to use Telnyx?" field

    Scenario: As a user, I can submit a fully filled "Support" contact form TX_TC_12
            Given I am on the contact page
            When I select "Support" option in "How can we help?" dropdown
            And I fill in "Support" form
            And I click submit button
            Then I should see a page with "Thank you." header

     Scenario: As a user, I can submit a fully filled Sales Inquiry contact form TX_TC_13
            Given I am on the contact page
            When I select "Sales Inquiry" option in "How can we help?" dropdown
            And I fill in "Sales Inquiry" form
            And I click submit button
            Then I should see a page with "Thank you." header