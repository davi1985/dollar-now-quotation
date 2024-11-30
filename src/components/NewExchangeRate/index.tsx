import ReactModal from 'react-modal';

import { currentBRL } from '../../utils/utils';
import { NewExchangeRateProps } from './types';

import { Button } from '../Button';

import { Section, Container } from './styles';
import { useNewExchangeRate } from './useNewExchangeRate';

export const NewExchangeRate = ({
  isOpen,
  onRequestClose,
}: NewExchangeRateProps) => {
  const {
    amount,
    result,
    handleClean,
    handleAmount,
    handleCalculate,
    currencySelected,
    handleSelectCurrency,
  } = useNewExchangeRate();

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="New Exchange Rate"
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <h2>Qual moeda você deseja converter ?</h2>

        <Section>
          <select
            aria-label="currencies"
            id=""
            value={currencySelected}
            onChange={handleSelectCurrency}
          >
            <option value="">Selecione</option>
            <option value="USD" defaultValue={'USD'}>
              Dólar para Real
            </option>
            <option value="EUR">Euro para Real</option>
          </select>

          <div className="separator">Valor para convenção</div>

          <input
            type="number"
            value={amount}
            onChange={handleAmount}
            placeholder="Digite o valor para convenção."
          />

          {!result ? (
            <Button text="Calcular" onClick={handleCalculate} />
          ) : (
            <Button text="Começar de novo" onClick={handleClean} />
          )}

          {!!result && <span>Total: {currentBRL(result)}</span>}
        </Section>
      </Container>
    </ReactModal>
  );
};
