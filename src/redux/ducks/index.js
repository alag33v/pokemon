import { combineReducers } from 'redux';

import { pokemonsReducer } from './pokemonsDucks';

const rootReducer = combineReducers({
  pokemons: pokemonsReducer,
});

export default rootReducer;
