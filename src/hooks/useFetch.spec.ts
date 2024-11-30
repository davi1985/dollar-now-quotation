import { act, renderHook } from '@testing-library/react';
import { useFetch } from './useFetch';
import { api } from '../services/api';

vitest.mock('./useCustomToast', () => ({
  useCustomToast: () => ({
    notify: vi.fn(),
  }),
}));

vitest.mock('../services/api');

const responseApi = {
  USDBRL: {
    code: 'USD',
    codein: 'BRL',
    name: 'Dólar Americano/Real Brasileiro',
    high: '5.3871',
    low: '5.3439',
    varBid: '0.0138',
    pctChange: '0.26',
    bid: '5.3766',
    ask: '5.3782',
    timestamp: '1718398242',
    create_date: '2024-06-14 17:50:42',
  },
  EURBRL: {
    code: 'EUR',
    codein: 'BRL',
    name: 'Euro/Real Brasileiro',
    high: '5.8313',
    low: '5.7117',
    varBid: '-0.0056',
    pctChange: '-0.1',
    bid: '5.7565',
    ask: '5.7645',
    timestamp: '1718398269',
    create_date: '2024-06-14 17:51:09',
  },
};

describe('useFetch', () => {
  it('should starts with default values', async () => {
    vi.mocked(api, true).get.mockResolvedValueOnce({
      data: { responseApi },
    });

    const { result, rerender } = renderHook(() => useFetch('USD'));

    expect(result.current.loading).toBe(true);

    rerender();
  });
});
