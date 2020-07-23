import React from 'react';
import { BUSINESS_ID_LEMON } from '../../Businesses/types/Lemon';
import { Manager } from '../Manager/Manager';

export const CabeJohnson = () => (
  <Manager
    managerID="MANAGER_CABE_JOHNSON"
    title="Cabe Johnson"
    description="Runs Lemonade Stands"
    price={10.00}
    businessID={BUSINESS_ID_LEMON}
  />
);
