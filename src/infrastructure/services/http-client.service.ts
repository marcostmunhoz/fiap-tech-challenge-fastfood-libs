import axios, { AxiosInstance, AxiosResponse, Method } from 'axios';

export type HttpClientResponse<T> = AxiosResponse<T>;

export class HttpClientService {
  private readonly axios: AxiosInstance;

  constructor() {
    this.axios = axios.create();
  }

  async request<T>(
    method: Method,
    url: string,
    data?: any,
  ): Promise<HttpClientResponse<T>> {
    return await this.axios.request<T>({ method, data, url });
  }

  async requestJson<T>(method: Method, url: string, data?: any): Promise<T> {
    const response = await this.request<T>(method, url, data);

    return response.data;
  }
}
