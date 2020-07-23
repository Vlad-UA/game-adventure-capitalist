import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import { ButtonStyled } from '../../styles/button';

export const ModalWindow = ({
  isOpen, closeModal, component: Component,
}) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={closeModal}
    style={{
      content: {
        marginTop: '60px',
        marginLeft: '-20px',
      },
    }}
    contentLabel="Example Modal"
    ariaHideApp={false}
  >
    <ModalWindowStyled>
      <Component />
      <CloseStyled onClick={closeModal}>Close</CloseStyled>
    </ModalWindowStyled>
  </Modal>
);

const ModalWindowStyled = styled('div')`
  display: grid;
  grid-template-columns: auto 100px;
`;

const CloseStyled = styled(ButtonStyled)`
  height: 60px;
`;
