class ThankYouPage {
  elements = {
    header: () => {
      return cy.get("h1");
    }
  };
}
export default new ThankYouPage();
