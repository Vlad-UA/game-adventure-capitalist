import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { INITIALISE_MANAGER } from '../../../../store/reducers/managers';

export const useInitializeManager = ({ managerID }) => {
  const dispatch = useDispatch();
  const manager = useSelector((state) => state.managers[managerID]);

  useEffect(() => {
    if (!manager) {
      dispatch({
        type: INITIALISE_MANAGER,
        payload: {
          id: managerID,
        },
      });
    }
  }, [managerID, manager, dispatch]);

  return { isPurchased: manager?.isPurchased };
};
