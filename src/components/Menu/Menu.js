import React from 'react';
import styled from 'styled-components';
import { ButtonStyled } from '../../styles/button';
import { Upgrades } from '../Upgrades/Upgrades';
import { ModalWindow } from '../ModalWindow/ModalWindow';
import { useModalWindow } from '../ModalWindow/hooks/useModalWindow';
import { Managers } from '../Managers/Managers';
import { useMenu } from './hooks/useMenu';

export const Menu = () => {
  const { modalIsOpen, setModalIsOpen, closeModal } = useModalWindow();
  const { content, openModalWindow } = useMenu({ setModalIsOpen });

  return (
    <MenuStyled>
      <ButtonStyled onClick={() => openModalWindow({ component: Upgrades })}>Upgrades</ButtonStyled>
      <ButtonStyled onClick={() => openModalWindow({ component: Managers })}>Managers</ButtonStyled>
      <ModalWindow isOpen={modalIsOpen} closeModal={closeModal} {...content} />
    </MenuStyled>
  );
};

const MenuStyled = styled('div')`
  display: grid;
  row-gap: 20px;
  padding-top: 87px;
`;
