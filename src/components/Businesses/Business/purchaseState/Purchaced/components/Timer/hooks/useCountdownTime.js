import { useSelector } from 'react-redux';
import { getHoursMinutesSecondsFromMilliseconds } from '../../../../../../../../utils/time';

export const useCountdownTime = ({ businessID }) => {
  let totalMilliseconds;
  const business = useSelector((state) => state.businesses[businessID]);
  const gameTimer = useSelector((state) => state.gameTimer);

  if (business?.progressCycle?.isStarted) {
    totalMilliseconds = business?.progressCycle?.endTime - gameTimer?.timeMilliseconds;
  } else {
    totalMilliseconds = business?.progressCycle?.durationMilliseconds;
  }

  return getHoursMinutesSecondsFromMilliseconds({ millisecondsQuantity: totalMilliseconds });
};
