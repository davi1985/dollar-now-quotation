import { formatAmount } from '../../utils/utils';
import * as S from './styles';

export const Card = ({
  currency,
  value,
}: {
  currency: string;
  value: number;
}) => {
  return (
    <S.Card>
      <S.Container>
        <h2>Cotação do {currency.toUpperCase()} hoje:</h2>

        <span>{formatAmount(value)}</span>

        <small>Fonte: https://economia.awesomeapi.com.br</small>
      </S.Container>
    </S.Card>
  );
};
