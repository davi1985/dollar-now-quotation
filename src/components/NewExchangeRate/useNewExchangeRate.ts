import { ChangeEvent, useState } from 'react';
import { useCustomToast } from '../../hooks/useCustomToast';
import { api } from '../../services/api';

export const useNewExchangeRate = () => {
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

    const { data } = await api.get(`/${currencySelected}`);

    const currency = `${currencySelected}BRL`;

    const result = amount * parseFloat(data[currency].ask);

    setResult(result);
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
