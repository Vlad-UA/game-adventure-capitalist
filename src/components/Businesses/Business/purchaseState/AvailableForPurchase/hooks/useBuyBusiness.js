import { useDispatch, useSelector } from 'react-redux';
import { BUY_NEW_TYPE_BUSINESS } from '../../../../../../store/reducers/businesses';
import { SET_MONEY_AMOUNT } from '../../../../../../store/reducers/playerMoney';
import { roundToCent } from '../../../../../../utils/number';

export const useBuyBusiness = ({ businessID }) => {
  const business = useSelector((state) => state.businesses[businessID]);
  const playerMoney = useSelector((state) => state.playerMoney);
  const dispatch = useDispatch();

  const buyBusiness = () => {
    if (playerMoney.amount >= business?.purchasePrice?.current) {
      dispatch({
        type: BUY_NEW_TYPE_BUSINESS,
        payload: {
          id: businessID,
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

  return { buyBusiness };
};
