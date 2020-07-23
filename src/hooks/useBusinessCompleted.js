import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BUSINESS_COMPLETED, START_BUSINESS } from '../store/reducers/businesses';
import { SET_MONEY_AMOUNT } from '../store/reducers/playerMoney';
import { roundToCent } from '../utils/number';

export const useBusinessCompleted = () => {
  const businesses = useSelector((state) => state.businesses);
  const gameTimer = useSelector((state) => state.gameTimer);
  const playerMoney = useSelector((state) => state.playerMoney);
  const dispatch = useDispatch();

  useEffect(() => {
    const businessesValuesArray = Object.values(businesses);

    businessesValuesArray.forEach(
      (business) => {
        if (business?.progressCycle?.isStarted && gameTimer?.timeMilliseconds >= business?.progressCycle?.endTime) {
          dispatch({
            type: BUSINESS_COMPLETED,
            payload: { id: business?.id },
          });

          dispatch({
            type: SET_MONEY_AMOUNT,
            payload: { amount: roundToCent(playerMoney?.amount + business?.income * business?.quantity) },
          });

          if (business?.progressCycle?.isAutoStartActivated) {
            dispatch({
              type: START_BUSINESS,
              payload: {
                id: business?.id,
                endTime: new Date().getTime() + business?.progressCycle?.durationMilliseconds,
              },
            });
          }
        }
      },
    );
  }, [businesses, gameTimer, playerMoney, dispatch]);
};
