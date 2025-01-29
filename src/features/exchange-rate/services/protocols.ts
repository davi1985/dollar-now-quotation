import { ExchangeRate } from '../models/exchange-rate';

export type RequestParams = {
  currencySelected: string;
};

export interface ExchangeRateServiceProtocol {
  getExchangeRate(): Promise<ExchangeRate>;
  getCurrentExchangeRate({
    currencySelected,
  }: RequestParams): Promise<ExchangeRate>;
}
