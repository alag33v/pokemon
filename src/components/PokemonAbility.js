import React from 'react';

import { motion } from 'framer-motion';
import { BiArrowBack } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { aboveTitle, aboveText } from '../assets/animations/animations';
import { StyledPokemonAbility } from '../styles/components/StyledPokemonAbility';

const PokemonAbility = () => {
  const { abilityName, abilityInfo, pokemonId } = useSelector(state => state.pokemons);
  const history = useHistory();

  const onComeBack = () => {
    history.push(`/pokemon/${pokemonId}`);
  };

  return (
    <StyledPokemonAbility>
      <motion.h3 className="title" variants={aboveTitle} initial="hidden" animate="show">{abilityName}</motion.h3>
      {abilityInfo.map(item => {
        if (item.language.name === 'en') {
          return (
            <motion.p className="info" variants={aboveText} initial="hidden" animate="show" key={item.effect}>
              {item.effect}
            </motion.p>
          );
        }

        return null;
      })}
      <BiArrowBack className="back" onClick={onComeBack} />
    </StyledPokemonAbility>
  );
};

export default PokemonAbility;
