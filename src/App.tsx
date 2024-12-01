import { useState } from 'react';
import { Button } from './components/Button';
import { Cards } from './components/Cards';
import { Header } from './components/Header';
import { NewExchangeRate } from './components/NewExchangeRate';

import { Container } from './styles/global';

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
