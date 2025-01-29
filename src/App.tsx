import { Button } from './commons/components/Button';
import { Header } from './commons/components/Header';

import { Container } from './commons/styles/global';
import { ExchangeRateView } from './features/exchange-rate/views/exchange-rate/exchange-rate.view';
import { NewExchangeRate } from './features/exchange-rate/views/new-exchange-rate/new-exchange-rate.view';
import { useApp } from './useApp';

export const App = () => {
  const { openModal, modalIsOpen, closeModal } = useApp();

  return (
    <Container>
      <Header />

      <ExchangeRateView />

      <Button text="Calcular convenção" onClick={openModal} />

      <NewExchangeRate isOpen={modalIsOpen} onRequestClose={closeModal} />
    </Container>
  );
};
