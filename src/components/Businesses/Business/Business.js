import React from 'react';
import { NotAvailableForPurchase } from './purchaseState/NotAvailableForPurchase/NotAvailableForPurchase';
import { AvailableForPurchase } from './purchaseState/AvailableForPurchase/AvailableForPurchase';
import { Purchased } from './purchaseState/Purchaced/Purchaced';
import { usePurchaseState } from './hooks/usePurchaseState';
import { useInitializeBusiness } from './hooks/useInitializeBusiness';

export const Business = (props) => {
  const { businessID } = useInitializeBusiness(props);

  const { isNotAvailableForPurchase, isAvailableForPurchase, isPurchased } = usePurchaseState({ businessID });

  return (
    <>
      {isNotAvailableForPurchase && <NotAvailableForPurchase businessID={businessID} />}
      {isAvailableForPurchase && <AvailableForPurchase businessID={businessID} />}
      {isPurchased && <Purchased businessID={businessID} />}
    </>
  );
};
