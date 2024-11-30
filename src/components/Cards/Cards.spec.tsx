import { render } from '@testing-library/react';
import { Cards } from '.';
import { useFetch } from '../../hooks/useFetch';
import { vi } from 'vitest';

vi.mock('../../hooks/useFetch', () => ({
  useFetch: () => ({
    data: {
      USDBRL: {
        code: 'USD',
        codein: 'BRL',
        name: 'Dólar Americano/Real Brasileiro',
        high: '6.115',
        low: '5.9551',
        varBid: '-0.0412',
        pctChange: '-0.67',
        bid: '5.973',
        ask: '5.9737',
        timestamp: '1732924798',
        create_date: '2024-11-29 20:59:58',
      },
      EURBRL: {
        code: 'EUR',
        codein: 'BRL',
        name: 'Euro/Real Brasileiro',
        high: '6.4582',
        low: '6.2922',
        varBid: '-0.0331',
        pctChange: '-0.47',
        bid: '6.3091',
        ask: '6.3251',
        timestamp: '1732924798',
        create_date: '2024-11-29 20:59:58',
      },
    },
    loading: false,
  }),
}));

describe('<Cards />', () => {
  it('should render correctly', () => {
    const { getByRole, debug } = render(<Cards />);

    getByRole('heading', { name: 'Cotação do DÓLAR hoje:' });
    getByRole('heading', { name: 'Cotação do EURO hoje:' });
  });
});
