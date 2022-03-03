import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { Button } from './components/Button';
import { Card } from './components/Card';
import { Cards } from './components/Cards';
import { Header } from './components/Header';
import { NewCotation } from './components/NewCotation';
import { api } from './services/api';

import { Container } from './styles/global';

Modal.setAppElement('#root');

export const App = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Container>
      <Header />

      <Cards />

      <Button text="Calcular converção" onClick={openModal}></Button>

      <NewCotation isOpen={modalIsOpen} onRequestClose={closeModal} />
    </Container>
  );
};
