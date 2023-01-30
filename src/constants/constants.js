export const PACK_TYPES = {
  basic: {
    name: 'basic',
    cost: 1,
    raresPerPack: 1,
    uncommonsPerPack: 2,
    commonsPerPack: 3,
  },
  premium: {
    name: 'premium',
    cost: 2,
    raresPerPack: 3,
    uncommonsPerPack: 2,
    commonsPerPack: 1,
  }
};

export const RARITIES = {
  0: 'common',
  1: 'uncommon',
  2: 'rare',
};

export const NUM_REQUIRED_TO_EVOLVE = 3;

export const BASE_URL = 'https://pokecollection.onrender.com';
