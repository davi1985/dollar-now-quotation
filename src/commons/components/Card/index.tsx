import { currentBRL } from '../../utils/utils';

import { CardProps } from './types';

import { Container } from './styles';

export const Card = ({ currency, value, isLoading }: CardProps) => (
  <Container>
    {isLoading ? (
      <p>Carregando cotação! 👩‍💻</p>
    ) : (
      <>
        <h2>Cotação do {currency.toUpperCase()} hoje:</h2>

        <span>{currentBRL(value)}</span>

        <small>Fonte: https://economia.awesomeapi.com.br</small>
      </>
    )}
  </Container>
);
