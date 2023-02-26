import React from 'react';
import money from '../../images/money.png';
import './GameBoard.css';
import Packs from './Packs/Packs';
import Piece from './Piece/Piece';

const GameBoard = (props) => {
  const { state: { name, currency, pokecollection }, handlePackClick, handlePokemonClick, pokemonCountInCollection } = props;

  return (
    <div className='game-board'>
      <div className='info'>
        <div className='row space-between'>
          <div className='name'>Name: {name}</div>
          <div className='currency'>Currency: {currency}
            <img className='money' alt='money' src={money} />
          </div>
        </div>
        <Packs
          handlePackClick={handlePackClick}
        />
      </div>
      <div className='collection'>
        <div className='row wrap'>
          {pokecollection.pokemons.length ?
            pokecollection.pokemons.map(pokemon => <Piece
              pokemon={pokemon}
              handlePokemonClick={handlePokemonClick}
              pokemonCountInCollection={pokemonCountInCollection}
            />) :
            <div>You don't have any Pokémon yet.</div>
          }
        </div>
      </div>
    </div>
  );
};

export default GameBoard;