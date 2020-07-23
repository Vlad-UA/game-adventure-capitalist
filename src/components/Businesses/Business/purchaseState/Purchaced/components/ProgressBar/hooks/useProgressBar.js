import { useSelector } from 'react-redux';

export const useProgressBar = ({ businessID }) => {
  let progressPercent = 0;
  const business = useSelector((state) => state.businesses[businessID]);
  const gameTimer = useSelector((state) => state.gameTimer);

  if (business?.progressCycle?.isStarted) {
    progressPercent = Math.round(
      // eslint-disable-next-line
      (business?.progressCycle?.durationMilliseconds - business?.progressCycle?.endTime + gameTimer?.timeMilliseconds) / business?.progressCycle?.durationMilliseconds * 100,
    );
  }

  return {
    income: business?.income * business?.quantity,
    progressPercent,
    isDisabled: business?.progressCycle?.isStarted,
  };
};
