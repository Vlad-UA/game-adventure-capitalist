import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { INITIALISE_BUSINESS } from '../../../../store/reducers/businesses';
import { MILLISECONDS_IN_SECOND, MINUTES_IN_HOUR, SECONDS_IN_MINUTE } from '../../../../constants';

export const useInitializeBusiness = ({
  id, name, quantity, income, progressCycleDuration, purchasePrice,
}) => {
  const dispatch = useDispatch();
  const business = useSelector((state) => state.businesses);

  useEffect(() => {
    if (!business[id]) {
      const durationMilliseconds = (
        progressCycleDuration.hours * MINUTES_IN_HOUR * SECONDS_IN_MINUTE
          + progressCycleDuration.minutes * SECONDS_IN_MINUTE
          + progressCycleDuration.seconds
      ) * MILLISECONDS_IN_SECOND;

      dispatch({
        type: INITIALISE_BUSINESS,
        payload: {
          id,
          name,
          quantity,
          income,
          progressCycleDurationMilliseconds: durationMilliseconds,
          purchasePrice,
        },
      });
    }
  }, [id, name, quantity, income, progressCycleDuration, purchasePrice, dispatch, business]);

  return { businessID: id };
};
