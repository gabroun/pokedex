import React from "react";
import Pokemon from "../../templates/pokemonTemplate";
import { render, screen } from "@testing-library/react";

const props = {
  pageContext: {
    pokemon: {
      name: "bulbasaur",
      artwork:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
  },
  data: {
    allPokemonData: {
      pokemon: {
        height: 7,
        weight: 69,
        types: [
          {
            type: {
              name: "grass",
            },
          },
          {
            type: {
              name: "poison",
            },
          },
        ],
        stats: [
          {
            base_stat: 45,
            stat: {
              name: "hp",
            },
          },
        ],
      },
    },
  },
};

describe("Pokmeon template page", () => {
  test("renders correctly", () => {
    render(<Pokemon pageContext={props.pageContext} data={props.data} />);
    expect(
      screen.getByText(props.data.allPokemonData.pokemon.types[0].type.name)
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /bulbasaur/i })
    ).toBeInTheDocument();
  });
});
