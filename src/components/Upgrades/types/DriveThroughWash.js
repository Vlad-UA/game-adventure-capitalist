import React from 'react';
import { Upgrade } from '../Upgrade/Upgrade';
import { BUSINESS_ID_CAR_WASH } from '../../Businesses/types/CarWash';

export const DriveThroughWash = () => (
  <Upgrade
    upgradeID="UPGRADE_DRIVE_THROUGH_WASH"
    title="Drive Through Wash"
    description="Car Wash profit x3"
    price={30.00}
    businessID={BUSINESS_ID_CAR_WASH}
    profitMultiplier={3}
  />
);
