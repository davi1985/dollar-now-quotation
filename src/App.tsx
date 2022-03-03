import { Card } from './components/Card';
import { Header } from './components/Header';

import { Container } from './styles/global';

export const App = () => {
  return (
    <Container>
      <Header />

      <Card currency="dólar" value={5.1} />
      <Card currency="euro" value={5.67} />

      <button>Calcular converção</button>
    </Container>
  );
};
