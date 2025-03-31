import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import contactPage from "../../e2e/pages/contact.page";
import { faker } from "@faker-js/faker";
import thankYouPage from "../../e2e/pages/thankYou.page";

var inputData = {
  selectSupport: "Support",
  selectSales: "Sales Inquiry",
  name: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email(),
  invalidEmail: faker.lorem.word(),
  website: faker.internet.url(),
  product: "Other",
  budget: "Less than $500",
  text: faker.lorem.sentence(),
};

Given("I am on the contact page", () => {
  contactPage.visit();
});

When("I click submit button", () => {
  contactPage.submitForm();
});

When("I fill in form without {string} field", (element: string) => {
  switch (element) {
    case "Last Name":
      contactPage.fillFirstName(inputData.name);
      break;
    case "Business email":
      contactPage.fillFirstName(inputData.name);
      contactPage.fillLastName(inputData.lastName);
      break;
    case "Company website":
      contactPage.fillFirstName(inputData.name);
      contactPage.fillLastName(inputData.lastName);
      contactPage.fillBusinessEmail(inputData.email);
      break;
    case "Please describe your request":
      contactPage.fillFirstName(inputData.name);
      contactPage.fillLastName(inputData.lastName);
      contactPage.fillBusinessEmail(inputData.email);
      contactPage.fillCompany(inputData.website);
      break;
    case "How did you hear about Telnyx?":
      contactPage.fillFirstName(inputData.name);
      contactPage.fillLastName(inputData.lastName);
      contactPage.fillBusinessEmail(inputData.email);
      contactPage.fillCompany(inputData.website);
      contactPage.fillRequest(inputData.text);
      break;
    case "Primary Product Interest":
      contactPage.fillFirstName(inputData.name);
      contactPage.fillLastName(inputData.lastName);
      contactPage.fillBusinessEmail(inputData.email);
      contactPage.fillCompany(inputData.website);
      break;
    case "What is your estimated monthly spend?":
      contactPage.fillFirstName(inputData.name);
      contactPage.fillLastName(inputData.lastName);
      contactPage.fillBusinessEmail(inputData.email);
      contactPage.fillCompany(inputData.website);
      contactPage.selectProduct("Other");
      break;
    case "How do you plan to use Telnyx?":
      contactPage.fillFirstName(inputData.name);
      contactPage.fillLastName(inputData.lastName);
      contactPage.fillBusinessEmail(inputData.email);
      contactPage.fillCompany(inputData.website);
      contactPage.selectProduct(inputData.product);
      contactPage.selectBudget(inputData.budget);
      break;
    default:
      break;
  }
});

When("I fill in {string} form", (option: string) => {
  contactPage.fillFirstName(inputData.name);
  contactPage.fillLastName(inputData.lastName);
  contactPage.fillBusinessEmail(inputData.email);
  contactPage.fillCompany(inputData.website);
  contactPage.fillAboutInfo(inputData.text);
  switch (option) {
    case "Support":
      contactPage.fillRequest(inputData.text);
      break;
    case "Sales Inquiry":
      contactPage.selectProduct(inputData.product);
      contactPage.selectBudget(inputData.budget);
      contactPage.fillAdditionalInfo(inputData.text);
      break;
    default:
      break;
  }
});

When("I submit form with invalid email", () => {
  contactPage.fillBusinessEmail(inputData.invalidEmail);
  contactPage.submitForm();
});

When(
  'I select {string} option in "How can we help?" dropdown',
  (option: string) => {
    if (option == "Support") {
      contactPage.selectHelpOption("Support");
    } else {
      contactPage.selectHelpOption("Sales Inquiry");
    }
  }
);

Then(
  "I should see a flash message saying {string} under the {string} field",
  (message: string, element: string) => {
    switch (element) {
      case "How can we help?":
        contactPage.elements.helpSelect().should("have.class", "mktoInvalid");
        contactPage.elements.helpSelectErrorMsg().should("have.text", message);
        break;
      case "First Name":
        contactPage.elements
          .firstNameInput()
          .should("have.class", "mktoInvalid");
        contactPage.elements.nameErrorMsg().should("have.text", message);
        break;
      case "Last Name":
        contactPage.elements
          .lastNameInput()
          .should("have.class", "mktoInvalid");
        contactPage.elements.lastNameErrorMsg().should("have.text", message);
        break;
      case "Business email":
        contactPage.elements
          .businessEmailInput()
          .should("have.class", "mktoInvalid");
        contactPage.elements.emailErrorMsg().should("contain.text", message);
        break;
      case "Company website":
        contactPage.elements
          .companyWebsiteInput()
          .should("have.class", "mktoInvalid");
        contactPage.elements.websiteErrorMsg().should("have.text", message);
        break;
      case "Please describe your request":
        contactPage.elements.requestInput().should("have.class", "mktoInvalid");
        contactPage.elements.requestErrorMsg().should("have.text", message);
        break;
      case "How did you hear about Telnyx?":
        contactPage.elements.aboutInput().should("have.class", "mktoInvalid");
        contactPage.elements.aboutErrorMsg().should("have.text", message);
        break;
      case "Primary Product Interest":
        contactPage.elements
          .productInterestSelect()
          .should("have.class", "mktoInvalid");
        contactPage.elements.productErrorMsg().should("have.text", message);
        break;
      case "What is your estimated monthly spend?":
        contactPage.elements.budgetSelect().should("have.class", "mktoInvalid");
        contactPage.elements.budgetErrorMsg().should("have.text", message);
        break;
      case "How do you plan to use Telnyx?":
        contactPage.elements
          .additionalInfoInput()
          .should("have.class", "mktoInvalid");
        contactPage.elements
          .additionalInfoErrorMsg()
          .should("have.text", message);
        break;
      default:
        break;
    }
  }
);

Then("I should see a page with {string} header", (header: string) => {
  thankYouPage.elements.header().should("have.text", header);
});

