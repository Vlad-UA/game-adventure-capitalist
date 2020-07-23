import styled, { css } from 'styled-components';

export const ButtonStyled = styled('button')`
  background-color: ${(props) => (props.isDisabled ? '#8C8176' : '#E1884A')};
  font-size: large;
  ${(props) => props.isDisabled && css`pointer-events: none;`}
  
  :hover {
    background-color: #c7753d;
    cursor: pointer;
  }
`;
