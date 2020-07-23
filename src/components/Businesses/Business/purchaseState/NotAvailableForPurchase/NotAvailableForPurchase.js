import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

export const NotAvailableForPurchase = ({ businessID }) => {
  const business = useSelector((state) => state.businesses[businessID]);

  return (
    <NotAvailableForPurchaseStyled>
      <div>{business?.name}</div>
      <div>{business?.purchasePrice?.current?.toFixed(2)}</div>
    </NotAvailableForPurchaseStyled>
  );
};

const NotAvailableForPurchaseStyled = styled('div')`
  display: grid;
  justify-items: center;
  background-color: #8C8176;
  width: 397px;
  height: 75px;
  font-size: large;
`;
