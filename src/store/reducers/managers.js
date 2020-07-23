const initialState = {};

export const INITIALISE_MANAGER = 'INITIALISE_MANAGER';
export const BUY_MANAGER = 'BUY_MANAGER';

export default function managers(stateManager = initialState, action) {
  switch (action.type) {
    case INITIALISE_MANAGER:
      return {
        ...stateManager,
        [action.payload.id]: {
          id: action.payload.id,
          isPurchased: false,
        },
      };

    case BUY_MANAGER:
      return {
        ...stateManager,
        [action.payload.id]: {
          ...stateManager[action.payload.id],
          isPurchased: true,
        },
      };

    default:
      return stateManager;
  }
}
