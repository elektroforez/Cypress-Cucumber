import { th } from "@faker-js/faker";

class MessagingPricing {
  elements = {
    firstName: () => {
      return cy.get("#FirstName");
    },
    lastName: () => {
      return cy.get("#LastName");
    },

    button: () => {
      return cy.get("button[type='submit']");
    },

    firstNameErrorMsg: () => {
      return cy.get("#ValidMsgFirstName");
    },
    lastNameErrorMsg: () => {
      return cy.get("#ValidMsgLastName");
    },
  };

  submitForm() {
    this.elements.button().click();
  }

  fillFirstName(text: string) {
    this.elements.firstName().type(text);
  }
}
export default new MessagingPricing();
