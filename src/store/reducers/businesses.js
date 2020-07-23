const initialState = {};

export const INITIALISE_BUSINESS = 'INITIALISE_BUSINESS';
export const START_BUSINESS = 'START_BUSINESS';
export const BUSINESS_COMPLETED = 'BUSINESS_COMPLETED';
export const BUY_ADDITIONAL_QUANTITY = 'BUY_ADDITIONAL_QUANTITY';
export const BUY_NEW_TYPE_BUSINESS = 'BUY_NEW_TYPE_BUSINESS';
export const SET_BUSINESS_INCOME = 'SET_BUSINESS_INCOME';
export const PROGRESS_CYCLE_AUTOSTART_ACTIVATE = 'PROGRESS_CYCLE_AUTOSTART_ACTIVATE';

export default function businesses(stateBusinesses = initialState, action) {
  switch (action.type) {
    case INITIALISE_BUSINESS:
      return {
        ...stateBusinesses,
        [action.payload.id]: {
          id: action.payload.id,
          name: action.payload.name,
          quantity: action.payload.quantity,
          income: action.payload.income,
          progressCycle: {
            durationMilliseconds: action.payload.progressCycleDurationMilliseconds,
            isStarted: false,
            isAutoStartActivated: false,
          },
          purchasePrice: action.payload.purchasePrice,

        },
      };

    case START_BUSINESS:
      return {
        ...stateBusinesses,
        [action.payload.id]: {
          ...stateBusinesses[action.payload.id],
          progressCycle: {
            ...stateBusinesses[action.payload.id].progressCycle,
            isStarted: true,
            endTime: action.payload.endTime,
          },
        },
      };

    case BUSINESS_COMPLETED:
      return {
        ...stateBusinesses,
        [action.payload.id]: {
          ...stateBusinesses[action.payload.id],
          progressCycle: {
            ...stateBusinesses[action.payload.id].progressCycle,
            endTime: null,
            isStarted: false,
          },
        },
      };

    case BUY_ADDITIONAL_QUANTITY:
      return {
        ...stateBusinesses,
        [action.payload.id]: {
          ...stateBusinesses[action.payload.id],
          quantity: action.payload.quantity,
          purchasePrice: {
            ...stateBusinesses[action.payload.id].purchasePrice,
            current: action.payload.purchasePriceNew,
          },
        },
      };

    case BUY_NEW_TYPE_BUSINESS:
      return {
        ...stateBusinesses,
        [action.payload.id]: {
          ...stateBusinesses[action.payload.id],
          quantity: 1,
        },
      };

    case SET_BUSINESS_INCOME:
      return {
        ...stateBusinesses,
        [action.payload.id]: {
          ...stateBusinesses[action.payload.id],
          income: action.payload.income,
        },
      };

    case PROGRESS_CYCLE_AUTOSTART_ACTIVATE:
      return {
        ...stateBusinesses,
        [action.payload.id]: {
          ...stateBusinesses[action.payload.id],
          progressCycle: {
            ...stateBusinesses[action.payload.id].progressCycle,
            isAutoStartActivated: true,
          },
        },
      };

    default:
      return stateBusinesses;
  }
}
