import React from 'react';
import styled from 'styled-components';
import { useBuyAdditionalQuantity } from './hooks/useBuyAdditionalQuantity';
import { ButtonStyled } from '../../../../../../../styles/button';

export const BuyAdditionalQuantity = ({ businessID }) => {
  const {
    purchasePrice, isAvailableForPurchase, buyAdditionalQuantity,
  } = useBuyAdditionalQuantity({ businessID });

  return (
    <BuyAdditionalQuantityStyled onClick={buyAdditionalQuantity} isDisabled={!isAvailableForPurchase}>
      <div>
        <div>Buy</div>
        <div>x1</div>
      </div>
      <div>{purchasePrice.toFixed(2)}</div>
    </BuyAdditionalQuantityStyled>
  );
};

const BuyAdditionalQuantityStyled = styled(ButtonStyled)`
  display: grid;
  grid-auto-flow: column;
  width: 146px;
`;
