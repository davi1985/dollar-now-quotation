import { useEffect, useState } from 'react';
import { api } from '../services/api';
import { ExchangeRate } from '../@types';

import { useCustomToast } from './useCustomToast';

export const useFetch = (params: string) => {
  const [data, setData] = useState<ExchangeRate | null>(null);
  const [loading, setLoading] = useState(false);
  const { notify } = useCustomToast();

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { data } = await api.get(params);

        setData(data);
        notify({ message: 'Cotação atualizada com sucesso!', type: 'success' });
      } catch (error) {
        notify({ message: 'Ocorreu um erro', type: 'error' });
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { data, loading };
};
