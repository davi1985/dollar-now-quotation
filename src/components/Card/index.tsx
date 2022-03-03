import { currenyBRL } from '../../utils/utils';

import { CardProps } from './types';

import * as S from './styles';

export const Card = ({ currency, value }: CardProps) => {
  return (
    <S.Card>
      <S.Container>
        <h2>Cotação do {currency.toUpperCase()} hoje:</h2>

        <span>{currenyBRL(value)}</span>

        <small>Fonte: https://economia.awesomeapi.com.br</small>
      </S.Container>
    </S.Card>
  );
};
