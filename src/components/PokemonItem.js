import React from 'react';

import { BiArrowBack } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { StyledPokemonItem } from '../styles/components/StyledPokemonItem';

const PokemonItem = ({ match }) => {
  const { pokemons } = useSelector(state => state.pokemons);
  const history = useHistory();

  const pokemonsFilter = pokemons.filter(pokemon => pokemon.id === +match.params.id);

  const pokemon = pokemonsFilter[0];

  const onComeBack = () => {
    history.push('/pokemon');
  };

  return (
    <StyledPokemonItem>
      <div className="wrapper">
        <div className="wrapper__left">
          <h3 className="title">Abilities:</h3>
          <ul>
            {pokemon.abilities.map(ability => (
              <li key={ability.ability.name}>{ability.ability.name}</li>
            ))}
          </ul>
          <h3 className="title">Types:</h3>
          <ul>
            {pokemon.types.map(type => (
              <li key={type.type.name}>
                <div>{type.type.name}</div>
              </li>
            ))}
          </ul>
          <p className="height">
            Height:
            {' '}
            {pokemon.height}
          </p>
          <p className="weight">
            Weight:
            {' '}
            {pokemon.weight}
          </p>
        </div>
        <div className="wrapper__right">
          <h2 className="name">{pokemon.name}</h2>
          <img className="image" src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
        </div>
      </div>
      <BiArrowBack className="back" onClick={onComeBack} />
    </StyledPokemonItem>
  );
};

export default PokemonItem;
