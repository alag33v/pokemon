// Actions
const ADD_POKEMONS = 'pokemons/ADD_POKEMONS';
const NEXT_URL = 'pokemons/NEXT_URL';
const PREV_URL = 'pokemons/PREV_URL';

// Reducer
const initialState = {
  pokemons: [],
  nextUrl: '',
  prevUrl: '',
};

export const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POKEMONS:
      return { ...state, pokemons: action.payload };
    case NEXT_URL:
      return { ...state, nextUrl: action.payload };
    case PREV_URL:
      return { ...state, prevUrl: action.payload };
    default:
      return state;
  }
};

// Action Creators
const addPokemons = arr => ({
  type: ADD_POKEMONS,
  payload: arr,
});

export const getNextUrl = str => ({
  type: NEXT_URL,
  payload: str,
});

export const getPrevUrl = str => ({
  type: PREV_URL,
  payload: str,
});
