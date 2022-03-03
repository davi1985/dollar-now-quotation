import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { Card } from './components/Card';
import { Header } from './components/Header';
import { NewCotation } from './components/NewCotation';
import { api } from './services/api';

import { Container } from './styles/global';

Modal.setAppElement('#root');

type Cotation = {
  USDBRL: {
    ask?: number;
  };
  EURBRL: {
    ask?: number;
  };
};

export const App = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [cotationDaily, setCotationDaily] = useState<Cotation | null>(
    {} as Cotation,
  );

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const getCotations = async () => {
      const response = await api.get<Cotation>('USD-BRL,EUR-BRL');
      const data = await response.data;

      setCotationDaily(data);
    };

    getCotations();
  }, []);

  return (
    <Container>
      <Header />

      <Card currency="dólar" value={cotationDaily?.USDBRL?.ask as number} />
      <Card currency="euro" value={cotationDaily?.EURBRL?.ask as number} />

      <button onClick={openModal}>Calcular converção</button>

      <NewCotation isOpen={modalIsOpen} onRequestClose={closeModal} />
    </Container>
  );
};
