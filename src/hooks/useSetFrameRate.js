import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { SET_GAME_TIME } from '../store/reducers/gameTimer';
import { FRAMES_PER_SECOND } from '../constants';

export const useSetFrameRate = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const setGameTimer = () => {
      const currentTimeMilliseconds = new Date().getTime();
      dispatch({
        type: SET_GAME_TIME,
        payload: { timeMilliseconds: currentTimeMilliseconds },
      });
    };

    const frameRateIntervalIDNew = setInterval(setGameTimer, FRAMES_PER_SECOND);

    return () => clearInterval(frameRateIntervalIDNew);
  }, [dispatch]);
};
