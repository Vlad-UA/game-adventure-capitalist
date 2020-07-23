import { useState } from 'react';

export const useMenu = ({ setModalIsOpen }) => {
  const [content, setContent] = useState({ component: '' });

  const openModalWindow = ({ component }) => {
    setContent({ component });
    setModalIsOpen(true);
  };

  return { content, openModalWindow };
};
