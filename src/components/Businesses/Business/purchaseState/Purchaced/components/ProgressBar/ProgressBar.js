import React from 'react';
import styled from 'styled-components';
import { useProgressBar } from './hooks/useProgressBar';
import { ButtonStyled } from '../../../../../../../styles/button';

export const ProgressBar = ({ businessID, onClick }) => {
  const { income, progressPercent, isDisabled } = useProgressBar({ businessID });

  return (
    <ProgressBarStyled onClick={onClick} isDisabled={isDisabled}>
      <div>{income.toFixed(2)}</div>
      <div>{`${progressPercent}%`}</div>
    </ProgressBarStyled>
  );
};

const ProgressBarStyled = styled(ButtonStyled)`
  display: grid;
  grid-auto-flow: column;
  justify-items: end;
  grid-template-columns: 130px 130px;
`;
