import React from 'react';
import { Business } from '../Business/Business';

export const BUSINESS_CAR_WASH = 'BUSINESS_CAR_WASH';

export const CarWash = React.memo(() => (
  <Business
    id={BUSINESS_CAR_WASH}
    name="Car Wash"
    quantity={0}
    income={30.37}
    progressCycleDuration={{ hours: 0, minutes: 0, seconds: 10 }}
    purchasePrice={{ current: 170.00, increaseStep: 30.83 }}
  />
));

CarWash.displayName = 'CarWash';
