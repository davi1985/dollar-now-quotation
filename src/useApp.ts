import { useState } from 'react';

export const useApp = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return {
    openModal,
    modalIsOpen,
    closeModal,
  };
};
