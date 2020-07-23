import React from 'react';
import styled from 'styled-components';
import { ButtonStyled } from '../../../../../../styles/button';

export const StartBusiness = ({
  name, quantity, onClick, isDisabled,
}) => (
  <StartBusinessStyled onClick={onClick} isDisabled={isDisabled}>
    <div>{name}</div>
    <div>{quantity}</div>
  </StartBusinessStyled>
);

const StartBusinessStyled = styled(ButtonStyled)`
  width: 120px;
`;
