import { currentBRL } from '../../../../commons/utils/utils';
import { Props } from './types';

import {
  Section,
  Container,
  ButtonContainer,
  ButtonRestart,
  ButtonCalc,
} from './styles';

import { Modal } from '@/commons/components/Modal';
import { ExchangeRateService } from '@/features/exchange-rate/services/exchange-rate.service';
import { HttpClient } from '@/infra/http-client';
import { useNewExchangeRateViewModel } from '../../view-models/new-exchange-rate.view-model';
export const NewExchangeRate = ({ isOpen, onRequestClose }: Props) => {
  const {
    amount,
    result,
    handleClean,
    handleAmount,
    handleCalculate,
    currencySelected,
    handleSelectCurrency,
  } = useNewExchangeRateViewModel({
    service: new ExchangeRateService(HttpClient.create()),
  });

  return (
    <Modal visibility={isOpen} onClose={onRequestClose}>
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

          <ButtonContainer>
            {!result ? (
              <ButtonCalc onClick={handleCalculate}>Calcular</ButtonCalc>
            ) : (
              <ButtonRestart onClick={handleClean}>
                Começar de novo
              </ButtonRestart>
            )}
          </ButtonContainer>

          {!!result && <span>Total: {currentBRL(result)}</span>}
        </Section>
      </Container>
    </Modal>
  );
};
