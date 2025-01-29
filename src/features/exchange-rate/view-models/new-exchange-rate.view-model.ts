import { ExchangeRateServiceProtocol } from '@/features/exchange-rate/services/protocols';
import { ChangeEvent, useState } from 'react';
import { useCustomToast } from '@/commons/hooks/useCustomToast';
import { ExchangeRateMapper } from '@/features/exchange-rate/mappers/exchange.mapper';

type Props = { service: ExchangeRateServiceProtocol };

export const useNewExchangeRateViewModel = ({ service }: Props) => {
  const [currencySelected, setCurrencySelected] = useState('');
  const [amount, setAmount] = useState<number>(0);
  const [result, setResult] = useState<number>(0);

  const { notify } = useCustomToast();

  const handleSelectCurrency = (e: ChangeEvent<HTMLSelectElement>) =>
    setCurrencySelected(e.target.value);

  const handleAmount = (e: ChangeEvent<HTMLInputElement>) =>
    setAmount(parseFloat(e.target.value));

  const handleCalculate = async () => {
    if (!currencySelected) {
      return notify({
        message: 'Selecione a moeda que deseja fazer o cálculo',
        type: 'error',
      });
    }

    if (!amount) {
      return notify({
        message: 'Digite algum valor',
        type: 'error',
      });
    }

    const response = await service.getCurrentExchangeRate({
      currencySelected,
    });

    const { currency } = ExchangeRateMapper.toModel({
      currencySelected,
      data: response,
    });

    setResult(amount * currency);
  };

  const handleClean = () => {
    setAmount(0);
    setCurrencySelected('');
    setResult(0);
  };

  return {
    amount,
    result,
    handleClean,
    handleAmount,
    handleCalculate,
    currencySelected,
    handleSelectCurrency,
  };
};
