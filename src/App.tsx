import { useState } from 'react';
import Modal from 'react-modal';

import { Button } from './components/Button';
import { Cards } from './components/Cards';
import { Header } from './components/Header';
import { NewExchangeRate } from './components/NewExchangeRate';

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

      <Button text="Calcular convenção" onClick={openModal} />

      <NewExchangeRate isOpen={modalIsOpen} onRequestClose={closeModal} />
    </Container>
  );
};
