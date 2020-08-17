import React from 'react';
import Piece from './Piece/Piece';
import Packs from './Packs/Packs';
import './GameBoard.css';
import money from '../../images/money.png';

const GameBoard = (props) => {
  const { state: { name, currency, pokecollection }, handlePackClick, handlePokemonClick, pokemonCountInCollection } = props;

  return (
    <div className='game-board'>
      <div className='info'>
        <div className='row'>
          <div className='name'>Name: {name}</div>
          <div className='currency'>Currency: {currency}
            <img className='money' alt='money' src={money} />
          </div>
        </div>
        <div className='row'>
          <Packs
            handlePackClick={handlePackClick}
          />
        </div>
      </div>
      <div className='collection'>
        {pokecollection.pokemons.map(pokemon => <Piece
          pokemon={pokemon}
          handlePokemonClick={handlePokemonClick}
          pokemonCountInCollection={pokemonCountInCollection}
        />)}
      </div>
    </div>
  );
};

export default GameBoard;