import React from 'react';
import styled from 'styled-components';
import { leftPadZero } from '../../../../../../../utils/number';
import { useCountdownTime } from './hooks/useCountdownTime';

export const Timer = ({ businessID }) => {
  const { hours, minutes, seconds } = useCountdownTime({ businessID });

  return <TimerStyled>{`${leftPadZero(hours)}:${leftPadZero(minutes)}:${leftPadZero(seconds)}`}</TimerStyled>;
};

const TimerStyled = styled('div')`
  line-height: 40px;
  background-color: #8C8176;
  color: #FFFFFF;
  text-align: center;
  width: 130px;
`;
