import { pokemonsAPI } from '../../api/api';

// Actions
const ADD_POKEMONS = 'pokemons/ADD_POKEMONS';
const NEXT_URL = 'pokemons/NEXT_URL';
const PREV_URL = 'pokemons/PREV_URL';
const ABILITY_NAME = 'pokemons/ABILITY_NAME';
const ABILITY_INFO = 'pokemons/ABILITY_INFO';
const POKEMON_ID = 'pokemons/POKEMON_ID';
const SHOW_LOADER = 'pokemons/SHOW_LOADER';
const HIDE_LOADER = 'pokemons/HIDE_LOADER';

// Reducer
const initialState = {
  pokemons: [],
  prevUrl: '',
  nextUrl: '',
  abilityName: '',
  abilityInfo: [],
  pokemonId: '',
  isLoading: false,
};

export const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POKEMONS:
      return { ...state, pokemons: action.payload };
    case PREV_URL:
      return { ...state, prevUrl: action.payload };
    case NEXT_URL:
      return { ...state, nextUrl: action.payload };
    case ABILITY_NAME:
      return { ...state, abilityName: action.payload };
    case ABILITY_INFO:
      return { ...state, abilityInfo: action.payload };
    case POKEMON_ID:
      return { ...state, pokemonId: action.payload };
    case SHOW_LOADER:
      return { ...state, isLoading: true };
    case HIDE_LOADER:
      return { ...state, isLoading: false };
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

export const getAbilityName = str => ({
  type: ABILITY_NAME,
  payload: str,
});

const abilityInfo = arr => ({
  type: ABILITY_INFO,
  payload: arr,
});

export const getPokemonId = str => ({
  type: POKEMON_ID,
  payload: str,
});

const showLoader = () => ({
  type: SHOW_LOADER,
});

const hideLoader = () => ({
  type: HIDE_LOADER,
});

// Thunks
const getPokemonItem = async data => {
  const pokemonData = await Promise.all(data.map(async pokemon => {
    const pokemonRecord = await pokemonsAPI.fetchPokemonItem(pokemon.url.slice(0, -1));

    return pokemonRecord;
  }));

  return pokemonData;
};

export const getPokemons = url => async dispatch => {
  dispatch(showLoader());

  const data = await pokemonsAPI.fetchPokemons(url);

  dispatch(getPrevUrl(data.previous));
  dispatch(getNextUrl(data.next));

  const pokemon = await getPokemonItem(data.results);

  dispatch(addPokemons(pokemon));

  dispatch(hideLoader());
};

export const getAbilityInfo = url => async dispatch => {
  const data = await pokemonsAPI.fetchAbilityInfo(url);

  dispatch(abilityInfo(data.effect_entries));
};
