import React from 'react';
import { Upgrade } from '../Upgrade/Upgrade';
import { BUSINESS_LEMON } from '../../Businesses/types/Lemon';

export const LittleUmbrellas = () => (
  <Upgrade
    upgradeID="UPGRADE_LITTLE_UMBRELLA"
    title="Little Umbrellas"
    description="Lemonade Stand profit x3"
    price={10.00}
    businessID={BUSINESS_LEMON}
    profitMultiplier={3}
  />
);
