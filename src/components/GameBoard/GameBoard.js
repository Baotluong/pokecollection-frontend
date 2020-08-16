import React from 'react';
import Piece from './Piece/Piece';
import Packs from './Packs/Packs';

const GameBoard = (props) => {
  const { state: { name, currency, pokecollection }, handlePackClick } = props;
  return (
    <div className='game-board'>
      <div className='info'>
        <div className='name'>Name: {name}</div>
        <div className='currency'>Currency {currency}</div>
        <Packs
          handlePackClick={handlePackClick}
        />
      </div>
      <div className='collection'>
        {pokecollection.pokemons.map(pokemon => <Piece pokemon={pokemon} />)}
      </div>
    </div>
  );
};

export default GameBoard;