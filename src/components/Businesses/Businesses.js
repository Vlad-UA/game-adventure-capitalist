import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Lemon } from './types/Lemon';
import { NewspaperDelivery } from './types/NewspaperDelivery';
import { CarWash } from './types/CarWash';

export const Businesses = () => {
  const playerMoney = useSelector((state) => state.playerMoney);

  return (
    <BusinessesStyled>
      <CapitalValueStyled>{`Your capital: $ ${playerMoney.amount}`}</CapitalValueStyled>
      <Lemon />
      <NewspaperDelivery />
      <CarWash />
    </BusinessesStyled>
  );
};

const BusinessesStyled = styled('div')`
  margin: 20px;
  display: grid;
  gap: 30px 30px;
`;

const CapitalValueStyled = styled('div')`
  font-size: xx-large;
`;
