const initialState = {
  amount: 70.00,
};

export const SET_MONEY_AMOUNT = 'SET_MONEY_AMOUNT';

export default function playerMoney(statePlayerMoney = initialState, action) {
  switch (action.type) {
    case SET_MONEY_AMOUNT:
      return {
        ...statePlayerMoney,
        amount: action.payload.amount,
      };

    default:
      return statePlayerMoney;
  }
}
