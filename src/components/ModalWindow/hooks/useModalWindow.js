import React from 'react';

export const useModalWindow = () => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const closeModal = () => setModalIsOpen(false);

  return { modalIsOpen, setModalIsOpen, closeModal };
};
