import axios from 'axios';

export const pokemonsAPI = {
  async fetchPokemons(url) {
    const response = await axios.get(url);

    return response.data;
  },
  async fetchPokemonItem(url) {
    const response = await axios.get(url);

    return response.data;
  },
};
