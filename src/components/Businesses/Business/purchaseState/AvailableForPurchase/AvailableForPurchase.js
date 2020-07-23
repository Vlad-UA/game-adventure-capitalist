import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { ButtonStyled } from '../../../../../styles/button';
import { useBuyBusiness } from './hooks/useBuyBusiness';

export const AvailableForPurchase = ({ businessID }) => {
  const business = useSelector((state) => state.businesses[businessID]);
  const { buyBusiness } = useBuyBusiness({ businessID });

  return (
    <AvailableForPurchaseStyled onClick={buyBusiness}>
      <div>{`BUY: ${business?.name}`}</div>
      <div>{business?.purchasePrice?.current?.toFixed(2)}</div>
    </AvailableForPurchaseStyled>
  );
};

const AvailableForPurchaseStyled = styled(ButtonStyled)`
  display: grid;
  justify-items: center;
  width: 397px;
  height: 75px;
`;
