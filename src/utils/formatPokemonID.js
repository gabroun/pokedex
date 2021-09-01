const formatPokemonID = (pokemonId) => {
  return pokemonId.toLocaleString("en-US", {
    minimumIntegerDigits: 3,
    useGrouping: false,
  });
};

export default formatPokemonID;
