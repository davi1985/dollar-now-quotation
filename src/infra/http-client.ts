import axios, { AxiosInstance, AxiosError } from 'axios';
import { HttpClientProtocol, HttpRequest } from './protocols';

export class HttpClient implements HttpClientProtocol {
  private readonly BASE_URL = 'https://economia.awesomeapi.com.br/last/';

  private constructor(private api: AxiosInstance = axios) {}

  static create() {
    return new HttpClient();
  }

  async sendRequest<T, K = unknown>(props: HttpRequest<K>) {
    const { method, body, endpoint, headers } = props;

    try {
      const { data } = await this.api.request<T>({
        url: `${this.BASE_URL}${endpoint}`,
        method,
        headers,
        data: body,
      });

      return data;
    } catch (err) {
      console.log({ err });
      const error = err as AxiosError;
      const status = error.response?.status || 500;
      const message = error.response?.data || error.message;

      throw new Error(`Request failed with status ${status}: ${message}`);
    }
  }
}
