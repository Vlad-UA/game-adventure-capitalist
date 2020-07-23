import React from 'react';
import { Business } from '../Business/Business';

export const BUSINESS_ID_LEMON = 'BUSINESS_ID_LEMON';

export const Lemon = () => (
  <Business
    id={BUSINESS_ID_LEMON}
    name="Business Lemon"
    quantity={1}
    income={2.15}
    progressCycleDuration={{ hours: 0, minutes: 0, seconds: 1 }}
    purchasePrice={{ current: 10.00, increaseStep: 0.03 }}
  />
);
