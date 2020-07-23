import React from 'react';
import { Business } from '../Business/Business';

export const BUSINESS_NEWSPAPER_DELIVERY = 'BUSINESS_NEWSPAPER_DELIVERY';

export const NewspaperDelivery = () => (
  <Business
    id={BUSINESS_NEWSPAPER_DELIVERY}
    name="Newspaper Delivery"
    quantity={0}
    income={10.25}
    progressCycleDuration={{ hours: 0, minutes: 0, seconds: 3 }}
    purchasePrice={{ current: 60.00, increaseStep: 10.33 }}
  />
);
