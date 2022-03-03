import { useState } from 'react';
import Modal from 'react-modal';
import { currenyBRL, customFormatCurrency } from '../../utils/utils';
import { NewCotationProps } from './types';

import * as S from './styles';
import { api } from '../../services/api';
import { toast, ToastContainer } from 'react-toastify';
import { useCustomToast } from '../../hooks/useCustomToast';

export type EURBRL = {
  EURBRL: {
    ask: string;
  };
};

export type USDBRL = {
  USDBRL: {
    ask: string;
  };
};

export const NewCotation = ({ isOpen, onRequestClose }: NewCotationProps) => {
  const [currencySelected, setCurrencySelected] = useState('');
  const [value, setValue] = useState<number>(0);
  const [result, setResult] = useState<number>(0);

  const { notify } = useCustomToast();

  const handleCalculate = async () => {
    if (!currencySelected) {
      return notify({
        message: 'Selecione a moeda que deseja fazer o cáculo',
        type: 'error',
      });
    }

    if (!value) {
      return notify({
        message: 'Digite algum valor',
        type: 'error',
      });
    }

    const { data } = await api.get(`/${currencySelected}`);
    const currency = `${currencySelected}BRL`;

    const result = value / parseFloat(data[currency].ask);

    setResult(result);
  };

  const handleClean = () => {
    setValue(0);
    setCurrencySelected('');
    setResult(0);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Example Modal"
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <ToastContainer />

      <S.Container>
        <h2>Qual moeda você deseja converter ?</h2>

        <S.Section>
          <select
            name=""
            id=""
            value={currencySelected}
            onChange={(e) => setCurrencySelected(e.target.value)}
          >
            <option value="">Selecione</option>
            <option value="USD" selected>
              Real para Dólar
            </option>
            <option value="EUR">Real para Euro</option>
          </select>

          <div className="separator">Valor para convenção</div>

          <input
            type="number"
            value={!value ? 'Digite o valor para converção.' : value}
            onChange={(e) => setValue(parseFloat(e.target.value))}
            placeholder="Digite o valor para converção."
          />

          {!result ? (
            <button onClick={handleCalculate}>Calcular</button>
          ) : (
            <button onClick={handleClean}>Calcular Novamente</button>
          )}

          {!!result && (
            <span>Total: {customFormatCurrency(currencySelected, result)}</span>
          )}
        </S.Section>
      </S.Container>
    </Modal>
  );
};
