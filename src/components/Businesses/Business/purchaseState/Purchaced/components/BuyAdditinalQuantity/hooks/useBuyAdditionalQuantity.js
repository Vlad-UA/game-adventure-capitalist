import { useDispatch, useSelector } from 'react-redux';
import { BUY_ADDITIONAL_QUANTITY } from '../../../../../../../../store/reducers/businesses';
import { SET_MONEY_AMOUNT } from '../../../../../../../../store/reducers/playerMoney';
import { roundToCent } from '../../../../../../../../utils/number';

export const useBuyAdditionalQuantity = ({ businessID }) => {
  const business = useSelector((state) => state.businesses[businessID]);
  const playerMoney = useSelector((state) => state.playerMoney);
  const dispatch = useDispatch();
  const isAvailableForPurchase = playerMoney?.amount >= business?.purchasePrice?.current;

  const buyAdditionalQuantity = () => {
    if (isAvailableForPurchase) {
      dispatch({
        type: BUY_ADDITIONAL_QUANTITY,
        payload: {
          id: businessID,
          quantity: business?.quantity + 1,
          purchasePriceNew: roundToCent(business?.purchasePrice?.current + business?.purchasePrice?.increaseStep),
        },
      });

      dispatch({
        type: SET_MONEY_AMOUNT,
        payload: {
          amount: roundToCent(playerMoney?.amount - business?.purchasePrice?.current),
        },
      });
    }
  };

  return {
    purchasePrice: business?.purchasePrice?.current,
    isAvailableForPurchase,
    buyAdditionalQuantity,
  };
};
