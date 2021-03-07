import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { getPokemons } from './redux/ducks/pokemonsDucks';

export const App = () => {
  const { pokemons, nextUrl, prevUrl } = useSelector(state => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons('https://pokeapi.co/api/v2/pokemon'));
  }, [dispatch]);

  const onPrevUrl = () => {
    dispatch(getPokemons(prevUrl));
  };

  const onNextUrl = () => {
    dispatch(getPokemons(nextUrl));
  };

  return (
    <div>
      <h1>Here</h1>
      <ul>
        {pokemons.map(pokemon => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
      {prevUrl && <button type="button" onClick={onPrevUrl}>PREV</button>}
      {nextUrl && <button type="button" onClick={onNextUrl}>NEXT</button>}
    </div>
  );
};
