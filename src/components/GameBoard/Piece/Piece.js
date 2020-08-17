import React from 'react';
import './Piece.css';
import { NUM_REQUIRED_TO_EVOLVE, RARITIES } from '../../../constants/constants';


const Piece = (props) => {
  const { pokemon, handlePokemonClick, pokemonCountInCollection } = props;

  const canEvolve = (pokemon) => {
    return pokemonCountInCollection(pokemon._id) > NUM_REQUIRED_TO_EVOLVE && pokemon.evolvesTo.length > 0;
  };

  return (
    <div className={`piece ${canEvolve(pokemon) ? 'clickable' : 'unclickable'}`}
      onClick={() => handlePokemonClick(pokemon._id)}
    >
      <img
        className='image'
        src={pokemon.sprite}
        alt={pokemon.name}
      />
      <div className='row center'>
        <div className={`name ${RARITIES[pokemon.rarity]}`}>{`${pokemon.name[0].toUpperCase()}${pokemon.name.slice(1)}`}</div>
      </div>
    </div>
  );
};

export default Piece;
