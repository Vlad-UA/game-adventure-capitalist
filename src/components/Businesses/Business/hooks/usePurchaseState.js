import { useSelector } from 'react-redux';

export const usePurchaseState = ({ businessID }) => {
  let isPurchased;
  let isNotAvailableForPurchase;
  let isAvailableForPurchase;
  const playerMoney = useSelector((state) => state.playerMoney);
  const business = useSelector((state) => state.businesses[businessID]);

  if (business?.quantity > 0) {
    isPurchased = true;
    isAvailableForPurchase = false;
    isNotAvailableForPurchase = false;
  } else {
    isPurchased = false;

    if (business?.purchasePrice?.current <= playerMoney?.amount) {
      isAvailableForPurchase = true;
      isNotAvailableForPurchase = false;
    } else {
      isAvailableForPurchase = false;
      isNotAvailableForPurchase = true;
    }
  }

  return { isNotAvailableForPurchase, isAvailableForPurchase, isPurchased };
};
