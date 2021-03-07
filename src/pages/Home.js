import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { getPokemons } from '../redux/ducks/pokemonsDucks';
import { StyledHome } from '../styles/pages/StyledHome';

const Home = () => {
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
    <StyledHome>
      <ul className="list">
        {pokemons.map(pokemon => (
          <li className="item" key={pokemon.id}>
            <div className="name">{pokemon.name}</div>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          </li>
        ))}
      </ul>
      <div className="btn__wrapper">
        {prevUrl
          ? <button type="button" onClick={onPrevUrl}>PREV</button>
          : <button type="button" disabled>PREV</button>}
        {nextUrl
          ? <button type="button" onClick={onNextUrl}>NEXT</button>
          : <button type="button" disabled>NEXT</button>}
      </div>
    </StyledHome>
  );
};

export default Home;
