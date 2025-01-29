import { render } from '@testing-library/react';
import { Card } from '.';

const cardPropsMock = {
  currency: 'dólar',
  value: 200,
  isLoading: false,
};
describe('Card', () => {
  it('should render correctly', () => {
    const { getByRole, getByText } = render(<Card {...cardPropsMock} />);

    getByRole('heading', { name: 'Cotação do DÓLAR hoje:' });
    getByText('R$ 200,00');
    getByText('Fonte: https://economia.awesomeapi.com.br');
  });

  it('should show loading message', async () => {
    const cardProps = {
      ...cardPropsMock,
      isLoading: true,
    };
    const { getByText } = render(<Card {...cardProps} />);

    getByText('Carregando cotação! 👩‍💻');
  });
});
