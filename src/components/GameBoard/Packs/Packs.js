import React from 'react';
import { PACK_TYPES } from '../../../constants/constants';
// import basicPack from '../../../images/basicPack.jpg';
import money from '../../../images/money.png';
import './Packs.css';

const Packs = (props) => {
  const { handlePackClick } = props;
  return (
    <div className='packs'>
      <div className='row'>
        <div className='pack basic'
          onClick={() => {handlePackClick(PACK_TYPES.basic)}}
        >{`${PACK_TYPES.basic.name.toUpperCase()} ${PACK_TYPES.basic.cost}`}
          <img className='money' alt='money' src={money} />
        </div>
        <div className='pack premium'
          onClick={() => {handlePackClick(PACK_TYPES.premium)}}
        >{`${PACK_TYPES.premium.name.toUpperCase()} ${PACK_TYPES.premium.cost}`}
          <img className='money' alt='money' src={money} />
        </div>
      </div>
    </div>
  );
};

export default Packs;
