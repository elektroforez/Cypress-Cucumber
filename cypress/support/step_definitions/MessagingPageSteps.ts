import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { faker } from "@faker-js/faker";
import messagingPricingPage from "../../e2e/pages/messagingPricing.page";

Given("I am on the Messaging pricing page", () => {
  cy.visit("/pricing/messaging");
  cy.scrollTo("0%", "60%");
});

When("I submit the download form", () => {
  messagingPricingPage.submitForm();
});

When("I fill in first name", () => {
  messagingPricingPage.fillFirstName(faker.person.firstName());
});

Then(
  "I should see {string} under the {string} input",
  (message: string, input: string) => {
    switch (input) {
      case "First Name":
        messagingPricingPage.elements
          .firstNameErrorMsg()
          .should("contain.text", message);
        messagingPricingPage.elements
          .firstName()
          .should("have.class", "mktoInvalid");
        break;
      case "Last Name":
        messagingPricingPage.elements
          .lastNameErrorMsg()
          .should("contain.text", message);
        messagingPricingPage.elements
          .lastName()
          .should("have.class", "mktoInvalid");
        break;
    }
  }
);
