import React, { useState } from "react";
import { graphql, Link } from "gatsby";
import * as S from "@styles/pokemonsList";

import formatPokemonID from "@utils/formatPokemonID";
import Layout from "@components/Layout";
import Toolbar from "@components/Toolbar";

const PokemonsList = ({
  data: {
    allPokemonData: { pokemons },
  },
  pageContext,
}) => {
  const { currentPage, numOfPages, pokemonsList } = pageContext;

  const emptyQuery = "";

  const [state, setState] = useState({
    filteredPokemons: [],
    query: emptyQuery,
  });

  const handleInputChange = (event) => {
    const query = event.target.value;

    const filteredPokemons = pokemonsList.filter((pokemon) => {
      return pokemon.name.includes(query.toLowerCase());
    });

    setState({
      query,
      filteredPokemons,
    });
  };

  const { filteredPokemons, query } = state;
  const hasSearchResults = filteredPokemons && query !== emptyQuery;
  const allPokemons = hasSearchResults ? filteredPokemons : pokemons.results;

  return (
    <Layout title={`Pokemons List - ${currentPage}`}>
      <S.SearchBox>
        <input
          className="searchInput"
          type="text"
          aria-label="Search"
          placeholder="Search pokemons.."
          onChange={handleInputChange}
        />
      </S.SearchBox>
      <S.PokemonList role="list">
        {allPokemons.map((pokemon) => {
          return (
            <S.PokemonCard key={pokemon.id} role="listitem">
              <Link to={`/pokemon/${pokemon.id}`}>
                <span>#{formatPokemonID(pokemon.id)}</span>
                <img src={pokemon.image} alt={pokemon.name} />
                <p>{pokemon.name}</p>
              </Link>
            </S.PokemonCard>
          );
        })}
      </S.PokemonList>
      {!hasSearchResults && (
        <Toolbar currentPage={currentPage} numOfPages={numOfPages} />
      )}
    </Layout>
  );
};

export default PokemonsList;

export const query = graphql`
  query ($limit: Int!, $skip: Int!) {
    allPokemonData {
      pokemons(limit: $limit, offset: $skip) {
        results {
          name
          url
          image
          id
          artwork
          dreamworld
        }
      }
    }
  }
`;
