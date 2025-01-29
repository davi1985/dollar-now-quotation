import { ExchangeRate } from '@/features/exchange-rate/models/exchange-rate';
import { IExchangeRateService } from '@/features/exchange-rate/services/exchange-rate.service';
import { useEffect, useState } from 'react';

type Props = {
  service: IExchangeRateService;
};
export const useExchangeRateViewModel = ({ service }: Props) => {
  const [currencies, setCurrencies] = useState<ExchangeRate>(
    {} as ExchangeRate,
  );
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadCurrencies = async () => {
      const data = await service.getExchangeRate();
      setCurrencies(data);
      setLoading(false);
    };

    loadCurrencies();
  }, []);

  return { currencies, loading };
};
