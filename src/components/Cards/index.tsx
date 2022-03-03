import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Card } from '../Card';
import { Quotation } from './types';

export const Cards = () => {
  const [quotationDaily, setQuotationDaily] = useState<Quotation | null>(
    {} as Quotation,
  );

  useEffect(() => {
    const getCotations = async () => {
      const response = await api.get<Quotation>('USD-BRL,EUR-BRL');
      const data = await response.data;

      setQuotationDaily(data);
    };

    getCotations();
  }, []);
  return (
    <>
      <Card currency="dólar" value={quotationDaily?.USDBRL?.ask as number} />

      <Card currency="euro" value={quotationDaily?.EURBRL?.ask as number} />
    </>
  );
};
