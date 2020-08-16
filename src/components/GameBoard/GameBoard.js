import React from 'react';
import Piece from './Piece/Piece';

const GameBoard = (props) => {
  const { name, currency, pokecollection } = props.state;
  return (
    <div className='game-board'>
      <div className='info'>
        <div className='name'>Name: {name}</div>
        <div className='currency'>Currency {currency}</div>
        <div className='packs'>Packs</div>
      </div>
      <div className='collection'>
        {pokecollection.pokemons.map(pokemon => <Piece pokemon={pokemon} />)}
      </div>
    </div>
  );
};

export default GameBoard;