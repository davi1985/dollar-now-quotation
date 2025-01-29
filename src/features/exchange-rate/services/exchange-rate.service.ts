import { HttpMethod, HttpClientProtocol } from '@/infra/protocols';
import { RequestParams, ExchangeRateServiceProtocol } from './protocols';
import { ExchangeRate } from '../models/exchange-rate';

export class ExchangeRateService implements ExchangeRateServiceProtocol {
  constructor(private readonly httpClient: HttpClientProtocol) {}

  async getExchangeRate() {
    return await this.httpClient.sendRequest<ExchangeRate>({
      endpoint: 'USD-BRL,EUR-BRL',
      method: HttpMethod.GET,
    });
  }

  async getCurrentExchangeRate({ currencySelected }: RequestParams) {
    return await this.httpClient.sendRequest<ExchangeRate>({
      endpoint: currencySelected,
      method: HttpMethod.GET,
    });
  }
}
