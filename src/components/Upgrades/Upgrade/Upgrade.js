import React from 'react';
import styled from 'styled-components';
import { ButtonStyled } from '../../../styles/button';
import { useBuyUpgrade } from './hooks/useBuyUpgrade';
import { useInitializeUpgrade } from './hooks/useInitializeUpgrade';

export const Upgrade = ({
  upgradeID, title, description, price, businessID, profitMultiplier,
}) => {
  const { isPurchased } = useInitializeUpgrade({ upgradeID });
  const { isDisabled, buyUpgrade } = useBuyUpgrade({
    price, businessID, profitMultiplier, upgradeID,
  });

  if (isPurchased) {
    return null;
  }

  return (
    <UpgradeStyled>
      <InfoStyled>
        <TitleStyled>{title}</TitleStyled>
        <div>{description}</div>
        <div>{price.toFixed(2)}</div>
      </InfoStyled>
      <ButtonStyled isDisabled={isDisabled} onClick={buyUpgrade}>Buy!</ButtonStyled>
    </UpgradeStyled>
  );
};

const UpgradeStyled = styled('div')`
  display: grid;
  grid-template-columns: 250px 50px;
`;

const InfoStyled = styled('div')`
  background-color: #EEE4DB;
  padding: 10px;
`;

const TitleStyled = styled('div')`
  font-weight: bold;
`;
