import { pokemonsAPI } from '../../api/api';

// Actions
const ADD_POKEMONS = 'pokemons/ADD_POKEMONS';
const NEXT_URL = 'pokemons/NEXT_URL';
const PREV_URL = 'pokemons/PREV_URL';

// Reducer
const initialState = {
  pokemons: [],
  prevUrl: '',
  nextUrl: '',
};

export const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POKEMONS:
      return { ...state, pokemons: action.payload };
    case PREV_URL:
      return { ...state, prevUrl: action.payload };
    case NEXT_URL:
      return { ...state, nextUrl: action.payload };
    default:
      return state;
  }
};

// Action Creators
const addPokemons = arr => ({
  type: ADD_POKEMONS,
  payload: arr,
});

export const getPrevUrl = str => ({
  type: PREV_URL,
  payload: str,
});

export const getNextUrl = str => ({
  type: NEXT_URL,
  payload: str,
});

// Thunks
const loadingPokemon = async data => {
  const pokemonData = await Promise.all(data.map(async pokemon => {
    const pokemonRecord = await pokemonsAPI.fetchPokemonItem(pokemon.url);

    return pokemonRecord;
  }));

  return pokemonData;
};

export const getPokemons = url => async dispatch => {
  const data = await pokemonsAPI.fetchPokemons(url);

  dispatch(getPrevUrl(data.previous));
  dispatch(getNextUrl(data.next));

  const pokemon = await loadingPokemon(data.results);

  dispatch(addPokemons(pokemon));
};
