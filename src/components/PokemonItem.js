import React from 'react';

import { motion } from 'framer-motion';
import { BiArrowBack } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { approachItem, approachInfo } from '../assets/animations/animations';
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
        <motion.div className="wrapper__left" variants={approachInfo} initial="hidden" animate="show">
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
        </motion.div>
        <motion.div className="wrapper__right" variants={approachItem} initial="hidden" animate="show">
          <h2 className="name">{pokemon.name}</h2>
          <img className="image" src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
        </motion.div>
      </div>
      <BiArrowBack className="back" onClick={onComeBack} />
    </StyledPokemonItem>
  );
};

export default PokemonItem;
