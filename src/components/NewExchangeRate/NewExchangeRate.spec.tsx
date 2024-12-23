import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vitest } from 'vitest';
import { NewExchangeRate } from '.';

describe('NewExchangeRate component', () => {
  it('should render correctly', () => {
    const onRequestCloseMock = vitest.fn();
    const { getByRole, getByPlaceholderText } = render(
      <NewExchangeRate isOpen onRequestClose={onRequestCloseMock} />,
    );

    getByRole('heading', { name: 'Qual moeda você deseja converter ?' });
    getByRole('button', { name: 'Calcular' });
    getByPlaceholderText('Digite o valor para convenção.');
  });

  it('should calculate the exchange rate to USD', async () => {
    const onRequestCloseMock = vitest.fn();
    const { getByRole, getByPlaceholderText, debug } = render(
      <NewExchangeRate isOpen onRequestClose={onRequestCloseMock} />,
    );
    const button = getByRole('button', { name: 'Calcular' });

    const input = getByPlaceholderText('Digite o valor para convenção.');
    const selectCurrency = getByRole('combobox', { name: 'currencies' });

    await userEvent.selectOptions(selectCurrency, 'USD');
    await userEvent.type(input, '20');

    // expect(selectCurrency).toHaveValue('USD');
  });
});
