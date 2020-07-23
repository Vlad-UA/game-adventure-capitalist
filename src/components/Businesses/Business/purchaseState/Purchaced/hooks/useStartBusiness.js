import { useDispatch, useSelector } from 'react-redux';
import { START_BUSINESS } from '../../../../../../store/reducers/businesses';

export const useStartBusiness = ({ businessID }) => {
  const business = useSelector((state) => state.businesses[businessID]);
  const dispatch = useDispatch();

  const runBusiness = () => {
    if (!business?.progressCycle?.isStarted) {
      dispatch({
        type: START_BUSINESS,
        payload: {
          id: businessID,
          endTime: new Date().getTime() + business?.progressCycle?.durationMilliseconds,
        },
      });
    }
  };

  return { startBusiness: runBusiness };
};
