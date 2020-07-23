import React from 'react';
import styled from 'styled-components';
import { LittleUmbrellas } from './types/LittleUmbrellas';
import { FunnyPages } from './types/FunnyPages';
import { DriveThroughWash } from './types/DriveThroughWash';

export const Upgrades = () => (
  <UpgradesStyled>
    <h2>UPGRADES</h2>
    <LittleUmbrellas />
    <FunnyPages />
    <DriveThroughWash />
  </UpgradesStyled>
);

const UpgradesStyled = styled('div')`
  display: grid;
  row-gap: 20px;
`;
