import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { INITIALISE_UPGRADE } from '../../../../store/reducers/upgrades';

export const useInitializeUpgrade = ({ upgradeID }) => {
  const dispatch = useDispatch();
  const upgrade = useSelector((state) => state.upgrades[upgradeID]);

  useEffect(() => {
    if (!upgrade) {
      dispatch({
        type: INITIALISE_UPGRADE,
        payload: {
          id: upgradeID,
        },
      });
    }
  }, [upgradeID, upgrade, dispatch]);

  return { isPurchased: upgrade?.isPurchased };
};
