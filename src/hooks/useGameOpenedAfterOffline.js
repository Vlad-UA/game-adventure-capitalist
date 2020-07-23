import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { initialState } from '../store/reducers/gameTimer';
import { getHoursMinutesSecondsFromMilliseconds } from '../utils/time';
import { roundToCent } from '../utils/number';
import { SET_MONEY_AMOUNT } from '../store/reducers/playerMoney';

export const useGameOpenedAfterOffline = () => {
  const gameTimer = useSelector((state) => state.gameTimer);
  const businesses = useSelector((state) => state.businesses);
  const playerMoney = useSelector((state) => state.playerMoney);
  const [isGameOpenedAfterOffline, setIsGameOpenedAfterOffline] = useState(null);
  const [offlineTime, setOfflineTime] = useState({});
  const [earnedSum, setEarnedSum] = useState(0);
  const dispatch = useDispatch();
  const showWelcomeBackAfterOfflineMilliseconds = 2000;

  useEffect(() => {
    const currentTime = new Date().getTime();
    const offlineMilliseconds = currentTime - gameTimer?.timeMilliseconds;

    const calculateEarnedSum = () => {
      const businessArray = Object.values(businesses);
      const sum = businessArray.reduce((acc, val) => {
        if (val?.progressCycle?.isAutoStartActivated) {
          return acc + Math.trunc(offlineMilliseconds / val?.progressCycle?.durationMilliseconds) * val?.income * val?.quantity;
        }
        return acc;
      }, 0);
      return roundToCent(sum);
    };

    if (gameTimer?.timeMilliseconds > initialState.timeMilliseconds && offlineMilliseconds > showWelcomeBackAfterOfflineMilliseconds) {
      setOfflineTime(getHoursMinutesSecondsFromMilliseconds({ millisecondsQuantity: offlineMilliseconds }));

      const sum = calculateEarnedSum();

      dispatch({
        type: SET_MONEY_AMOUNT,
        payload: {
          amount: roundToCent(playerMoney?.amount + sum),
        },
      });

      setEarnedSum(sum);
      setIsGameOpenedAfterOffline(true);
    }
  }, []); // eslint-disable-line

  return {
    offlineTime,
    earnedSum,
    isGameOpenedAfterOffline,
  };
};
