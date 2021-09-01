const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allPokemonData {
        pokemons(limit: 168, offset: 0) {
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
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const pokemons = result.data.allPokemonData.pokemons.results;

  // create pokemons list pages
  const pokemonsPerPage = 24;
  const numOfPages = Math.ceil(pokemons.length / pokemonsPerPage);
  Array.from({ length: numOfPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/pokemons` : `/pokemons/${i + 1}`,
      component: path.resolve("./src/templates/pokemonsListTemplate.js"),
      context: {
        limit: pokemonsPerPage,
        skip: i * pokemonsPerPage,
        numOfPages,
        currentPage: i + 1,
        pokemonsList: pokemons,
      },
    });
  });

  // create pokemon pages
  pokemons.forEach((pokemon) => {
    createPage({
      path: `/pokemon/${pokemon.id}`,
      component: path.resolve("./src/templates/pokemonTemplate.js"),
      context: {
        pokemon,
        pokemonName: pokemon.name,
      },
    });
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
        "@styles": path.resolve(__dirname, "src/styles"),
        "@hooks": path.resolve(__dirname, "src/hooks"),
        "@utils": path.resolve(__dirname, "src/utils"),
      },
    },
  });
};
