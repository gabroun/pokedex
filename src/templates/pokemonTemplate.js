import React, { useState } from "react";
import { graphql, Link } from "gatsby";
import Layout from "@components/Layout";
import * as S from "@styles/pokemon";
import ProgressBar from "@components/ProgressBar";

const Pokemon = ({
  pageContext: { pokemon },
  data: {
    allPokemonData: { pokemon: pokemonInfo },
  },
}) => {
  const [tab, setActiveTab] = useState("1");

  return (
    <Layout title={pokemon.name}>
      <S.PokemonItem>
        <Link to={`/pokemons`} rel="back" className="back">
          <span>←</span> All Pokemons
        </Link>
        <h2 className="pokemon-name">{pokemon.name}</h2>
        <img src={pokemon.artwork} className="pokemon-img" alt={pokemon.name} />
        <div className="pokemon-info">
          <div className="tabs">
            <ul
              className="tabs-header-container"
              role="tablist"
              aria-label="Pokemon Info Tabs"
            >
              <li
                onClick={(e) => {
                  setActiveTab(e.target.dataset.id);
                }}
                className={`tab-header ${tab === "1" ? "active" : ""}`}
                data-id="1"
                role="tab"
                onKeyDown={(e) => {
                  setActiveTab(e.target.dataset.id);
                }}
              >
                About
              </li>
              <li
                onClick={(e, data) => {
                  setActiveTab(e.target.dataset.id);
                }}
                className={`tab-header ${tab === "2" ? "active" : ""}`}
                data-id="2"
                role="tab"
                onKeyDown={(e) => {
                  setActiveTab(e.target.dataset.id);
                }}
              >
                Stats
              </li>
            </ul>
            <div
              className={`tab-content ${tab === "1" ? "active" : ""}`}
              data-id="1"
            >
              <div className="row">
                <span>Height</span>
                <span>{pokemonInfo.height / 10}m</span>
              </div>
              <div className="row">
                <span>weight</span>
                <span>{pokemonInfo.weight / 10}kg</span>
              </div>
              <div className="row">
                <span>Type</span>
                <p>
                  {pokemonInfo.types.map((type, i) => {
                    return (
                      <span
                        key={`${type.type.name} ${i}`}
                        className={`${type.type.name} type`}
                      >
                        {type.type.name}
                      </span>
                    );
                  })}
                </p>
              </div>
            </div>
            <div
              className={`tab-content ${tab === "2" ? "active" : ""}`}
              data-id="2"
            >
              <div className="row-container">
                {pokemonInfo.stats.map((stat) => {
                  return <ProgressBar key={stat.stat.name} stat={stat} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </S.PokemonItem>
    </Layout>
  );
};

export default Pokemon;

export const query = graphql`
  query ($pokemonName: String!) {
    allPokemonData {
      pokemon(name: $pokemonName) {
        weight
        height
        types {
          type {
            name
          }
        }
        stats {
          base_stat
          stat {
            name
          }
        }
        moves {
          move {
            name
          }
        }
      }
    }
  }
`;
