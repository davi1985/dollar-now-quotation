import { useExchangeRateViewModel } from '@/features/exchange-rate/view-models/exchange-rate.view-model';
import { Container } from './styles';
import { Card } from '@/commons/components/Card';
import { HttpClient } from '@/infra/http-client';
import { ExchangeRateService } from '@/features/exchange-rate/services/exchange-rate.service';

export const ExchangeRateView = () => {
  const { currencies, loading } = useExchangeRateViewModel({
    service: new ExchangeRateService(HttpClient.create()),
  });

  return (
    <Container>
      <Card
        currency="dólar"
        value={currencies?.USDBRL?.ask as number}
        isLoading={loading}
      />

      <Card
        currency="euro"
        value={currencies?.EURBRL?.ask as number}
        isLoading={loading}
      />
    </Container>
  );
};
