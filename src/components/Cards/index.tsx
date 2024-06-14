import { useFetch } from '../../hooks/useFetch';
import { Card } from '../Card';
import { Container } from './styles';

const PARAMS = 'USD-BRL,EUR-BRL';
export const Cards = () => {
  const { data, loading } = useFetch(PARAMS);

  return (
    <Container>
      <Card
        currency="dólar"
        value={data?.USDBRL?.ask as number}
        isLoading={loading}
      />

      <Card
        currency="euro"
        value={data?.EURBRL?.ask as number}
        isLoading={loading}
      />
    </Container>
  );
};
