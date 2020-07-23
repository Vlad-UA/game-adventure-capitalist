import React from 'react';
import { Upgrade } from '../Upgrade/Upgrade';
import { BUSINESS_NEWSPAPER_DELIVERY } from '../../Businesses/types/NewspaperDelivery';

export const FunnyPages = () => (
  <Upgrade
    upgradeID="UPGRADE_FUNNY_PAGES"
    title="Funny Pages"
    description="Newspaper Delivery profit x3"
    price={20.00}
    businessID={BUSINESS_NEWSPAPER_DELIVERY}
    profitMultiplier={3}
  />
);
