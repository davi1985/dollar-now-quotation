import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Card } from '../Card';
import { Cotation } from './types';

export const Cards = () => {
  const [cotationDaily, setCotationDaily] = useState<Cotation | null>(
    {} as Cotation,
  );

  useEffect(() => {
    const getCotations = async () => {
      const response = await api.get<Cotation>('USD-BRL,EUR-BRL');
      const data = await response.data;

      setCotationDaily(data);
    };

    getCotations();
  }, []);
  return (
    <>
      <Card currency="dólar" value={cotationDaily?.USDBRL?.ask as number} />

      <Card currency="euro" value={cotationDaily?.EURBRL?.ask as number} />
    </>
  );
};
