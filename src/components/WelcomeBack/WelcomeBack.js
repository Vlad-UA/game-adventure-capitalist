import React from 'react';
import styled from 'styled-components';
import { ButtonStyled } from '../../styles/button';
import { leftPadZero } from '../../utils/number';

export const WelcomeBack = ({ setIsWelcomeBackClosed, offlineTime, earnedSum }) => (
  <WelcomeBackStyled>
    <h1>Welcome back Capitalist!</h1>
    <p>{`You were offline for ${leftPadZero(offlineTime.hours)}:${leftPadZero(offlineTime.minutes)}:${leftPadZero(offlineTime.seconds)}`}</p>
    <p>{`You earned ${earnedSum}`}</p>
    <ButtonStyled onClick={() => setIsWelcomeBackClosed(true)}>Dandy!</ButtonStyled>
  </WelcomeBackStyled>
);

const WelcomeBackStyled = styled('div')`
  margin: 20px;
`;
