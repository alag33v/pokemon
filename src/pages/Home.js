import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { getPokemons } from '../redux/ducks/pokemonsDucks';
import { StyledLoader } from '../styles/components/StyledLoader';
import { StyledHome } from '../styles/pages/StyledHome';

const Home = () => {
  const {
    pokemons, nextUrl, prevUrl, isLoading,
  } = useSelector(state => state.pokemons);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getPokemons('https://pokeapi.co/api/v2/pokemon'));
  }, [dispatch]);

  const onDetails = id => {
    history.push(`/pokemon/${id}`);
  };

  const onPrevUrl = () => {
    dispatch(getPokemons(prevUrl));
  };

  const onNextUrl = () => {
    dispatch(getPokemons(nextUrl));
  };

  if (isLoading) return <StyledLoader />;

  return (
    <StyledHome>
      <ul className="list">
        {pokemons.map(pokemon => (
          <li className="item" onClick={() => onDetails(pokemon.id)} key={pokemon.id}>
            <div className="name">{pokemon.name}</div>
            <img
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
            />
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
