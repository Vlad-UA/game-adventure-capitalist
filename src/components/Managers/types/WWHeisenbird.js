import React from 'react';
import { Manager } from '../Manager/Manager';
import { BUSINESS_CAR_WASH } from '../../Businesses/types/CarWash';

export const WWHeisenbird = () => (
  <Manager
    managerID="MANAGER_WW_HEISENBIRD"
    title="W.W. Heisenbird"
    description="Runs Car Washes"
    price={30.00}
    businessID={BUSINESS_CAR_WASH}
  />
);
