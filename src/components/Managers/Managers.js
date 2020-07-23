import React from 'react';
import styled from 'styled-components';
import { CabeJohnson } from './types/CabeJohnson';
import { PerryBlack } from './types/PerryBlack';
import { WWHeisenbird } from './types/WWHeisenbird';

export const Managers = () => (
  <ManagersStyled>
    <h2>MANAGERS</h2>
    <CabeJohnson />
    <PerryBlack />
    <WWHeisenbird />
  </ManagersStyled>
);

const ManagersStyled = styled('div')`
  display: grid;
  row-gap: 20px;
`;
