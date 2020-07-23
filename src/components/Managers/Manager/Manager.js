import React from 'react';
import styled from 'styled-components';
import { ButtonStyled } from '../../../styles/button';
import { useInitializeManager } from './hooks/useInitializeManager';
import { useBuyManager } from './hooks/useBuyManager';

export const Manager = ({
  managerID, title, description, price, businessID,
}) => {
  const { isPurchased } = useInitializeManager({ managerID });
  const { isDisabled, buyManager } = useBuyManager({
    price, businessID, managerID,
  });

  if (isPurchased) {
    return null;
  }

  return (
    <ManagerStyled>
      <InfoStyled>
        <TitleStyled>{title}</TitleStyled>
        <div>{description}</div>
        <div>{price.toFixed(2)}</div>
      </InfoStyled>
      <ButtonStyled isDisabled={isDisabled} onClick={buyManager}>Buy!</ButtonStyled>
    </ManagerStyled>
  );
};

const ManagerStyled = styled('div')`
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
