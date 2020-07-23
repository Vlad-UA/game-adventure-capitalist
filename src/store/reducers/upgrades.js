const initialState = {};

export const INITIALISE_UPGRADE = 'INITIALISE_UPGRADE';
export const BUY_UPGRADE = 'BUY_UPGRADE';

export default function upgrades(stateUpgrades = initialState, action) {
  switch (action.type) {
    case INITIALISE_UPGRADE:
      return {
        ...stateUpgrades,
        [action.payload.id]: {
          id: action.payload.id,
          isPurchased: false,
        },
      };

    case BUY_UPGRADE:
      return {
        ...stateUpgrades,
        [action.payload.id]: {
          ...stateUpgrades[action.payload.id],
          isPurchased: true,
        },
      };

    default:
      return stateUpgrades;
  }
}
