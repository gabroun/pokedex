/// <reference types="Cypress" />

describe("pokemon list page renders", () => {
  it("works", () => {
    cy.visit("/pokemons");
    cy.get('div[role="listitem"]')
      .first()
      .find("p", { name: /bulbasaur/i });
  });

  it("navigate to second page in pokemons list", () => {
    cy.visit("/pokemons");
    cy.get(".toolbar").find(".toolbar-next").click();

    cy.wait(500);

    cy.get('div[role="listitem"]')
      .first()
      .find("p", { name: /pikachu/i });
  });
});
