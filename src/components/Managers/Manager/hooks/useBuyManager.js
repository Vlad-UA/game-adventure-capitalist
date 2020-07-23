import { useDispatch, useSelector } from 'react-redux';
import { roundToCent } from '../../../../utils/number';
import { SET_MONEY_AMOUNT } from '../../../../store/reducers/playerMoney';
import { BUY_MANAGER } from '../../../../store/reducers/managers';
import { PROGRESS_CYCLE_AUTOSTART_ACTIVATE, START_BUSINESS } from '../../../../store/reducers/businesses';

export const useBuyManager = ({
  price, businessID, managerID,
}) => {
  const playerMoney = useSelector((state) => state.playerMoney);
  const business = useSelector((state) => state.businesses[businessID]);
  const dispatch = useDispatch();

  const buyManager = () => {
    if (business?.quantity > 0 && playerMoney?.amount >= price) {
      dispatch({
        type: BUY_MANAGER,
        payload: {
          id: managerID,
        },
      });

      dispatch({
        type: PROGRESS_CYCLE_AUTOSTART_ACTIVATE,
        payload: {
          id: businessID,
        },
      });

      dispatch({
        type: SET_MONEY_AMOUNT,
        payload: {
          amount: roundToCent(playerMoney?.amount - price),
        },
      });

      if (!business?.progressCycle?.isStarted) {
        dispatch({
          type: START_BUSINESS,
          payload: {
            id: business?.id,
            endTime: new Date().getTime() + business?.progressCycle?.durationMilliseconds,
          },
        });
      }
    }
  };

  return {
    isDisabled: business?.quantity === 0 || playerMoney?.amount < price,
    buyManager,
  };
};
