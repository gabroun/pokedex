/// <reference types="Cypress" />

describe("Accessibility tests", () => {
  beforeEach(() => {
    cy.visit("/").get("main").injectAxe();
    cy.wait(100);
  });
  it("Has no detectable accessibility violations on load", () => {
    cy.checkA11y();
  });

  it("Navigates to pokemons list page and checks for accessibility violations", () => {
    cy.findByText(/list of pokemons/i).click();
    cy.wait(200);
    cy.checkA11y();
  });
});
