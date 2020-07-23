import React from 'react';
import { Manager } from '../Manager/Manager';
import { BUSINESS_ID_NEWSPAPER_DELIVERY } from '../../Businesses/types/NewspaperDelivery';

export const PerryBlack = () => (
  <Manager
    managerID="MANAGER_PERRY_BLACK"
    title="Perry Black"
    description="Runs Newspaper Deliveries"
    price={20.00}
    businessID={BUSINESS_ID_NEWSPAPER_DELIVERY}
  />
);
