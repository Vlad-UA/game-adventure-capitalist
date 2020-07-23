import { useDispatch, useSelector } from 'react-redux';
import { BUY_UPGRADE } from '../../../../store/reducers/upgrades';
import { SET_BUSINESS_INCOME } from '../../../../store/reducers/businesses';
import { roundToCent } from '../../../../utils/number';
import { SET_MONEY_AMOUNT } from '../../../../store/reducers/playerMoney';

export const useBuyUpgrade = ({
  price, businessID, profitMultiplier, upgradeID,
}) => {
  const playerMoney = useSelector((state) => state.playerMoney);
  const business = useSelector((state) => state.businesses[businessID]);
  const dispatch = useDispatch();

  const buyUpgrade = () => {
    if (playerMoney?.amount >= price) {
      dispatch({
        type: BUY_UPGRADE,
        payload: {
          id: upgradeID,
        },
      });

      dispatch({
        type: SET_BUSINESS_INCOME,
        payload: {
          id: businessID,
          income: roundToCent(business?.income * profitMultiplier),
        },
      });

      dispatch({
        type: SET_MONEY_AMOUNT,
        payload: {
          amount: roundToCent(playerMoney?.amount - price),
        },
      });
    }
  };

  return {
    isDisabled: business?.quantity === 0 || playerMoney?.amount < price,
    buyUpgrade,
  };
};
