import React from 'react';

const raritySymbol = (rarity) => {
  if (rarity === 2) {
    return <span>&#9733;</span>;
  } else if (rarity === 1) {
    return <span>&#9632;</span>;
  } else {
    return <span>&#9679;</span>;
  }
}

const Piece = (props) => {
  const { pokemon } = props;
  return (
    <div className='piece'>
      <img src={pokemon.sprite} />
      <div className='piece-name'>{pokemon.name.toUpperCase()}</div>
      <div className='piece-rarity'>{raritySymbol(pokemon.rarity)}</div>
    </div>
  );
};

export default Piece;
