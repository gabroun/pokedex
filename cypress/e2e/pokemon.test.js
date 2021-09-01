/// <reference types="Cypress" />

describe("pokemon page renders", () => {
  it("works", () => {
    cy.visit("/pokemon/1");
    cy.findAllByRole("tab", { name: /Stats/i }).last().click();

    cy.findAllByRole("heading", { name: /bulbasaur/i });
  });
});
