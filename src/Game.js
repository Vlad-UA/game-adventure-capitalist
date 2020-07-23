import React from 'react';
import styled from 'styled-components';
import { Businesses } from './components/Businesses/Businesses';
import { useSetFrameRate } from './hooks/useSetFrameRate';
import { useBusinessCompleted } from './hooks/useBusinessCompleted';
import { Menu } from './components/Menu/Menu';

export const Game = () => {
  useSetFrameRate();
  useBusinessCompleted();

  return (
    <div>
      <GameStyled>
        <Menu />
        <Businesses />
      </GameStyled>
    </div>
  );
};

const GameStyled = styled('div')`
  display: grid;
  grid-template-columns: 120px auto;
  margin: 20px;
`;
