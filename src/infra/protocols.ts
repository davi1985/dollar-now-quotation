export enum HttpMethod {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  PATCH = 'patch',
  DELETE = 'delete',
}

export type HttpRequest<T> = {
  endpoint: string;
  method: HttpMethod;
  body?: T;
  headers?: Record<string, string>;
};

export interface HttpClientProtocol {
  sendRequest: <T, K = unknown>(request: HttpRequest<K>) => Promise<T>;
}
