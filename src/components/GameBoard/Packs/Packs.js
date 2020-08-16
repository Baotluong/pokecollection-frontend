import React from 'react';
import { PACK_TYPES } from '../../../constants/constants';
// import basicPack from '../../../images/basicPack.jpg';

const Packs = (props) => {
  const { handlePackClick } = props;
  return (
    <div className='packs'>
      <div className='pack basic'>
        <div className='pack-name'
          onClick={() => {handlePackClick(PACK_TYPES.basic)}}
        >{PACK_TYPES.basic.name.toUpperCase()} {PACK_TYPES.basic.cost}P</div>
        <div className='pack-name'
          onClick={() => {handlePackClick(PACK_TYPES.premium)}}
        >{PACK_TYPES.premium.name.toUpperCase()} {PACK_TYPES.premium.cost}P</div>
      </div>
    </div>
  );
};

export default Packs;
