import axios, { AxiosRequestConfig, AxiosInstance, AxiosRequestHeaders, AxiosResponse } from 'axios';
export const END_POINT = 'http://localhost:5000';

const axiosConfig: AxiosRequestConfig = {
  baseURL: END_POINT,
};

const instance = axios.create(axiosConfig);

export interface IRequestProps {
  instance?: AxiosInstance;
  url: string;
  method: 'get' | 'post' | 'put' | 'delete' | 'patch';
  query?: Record<string, any>;
  data?: any;
  headers: AxiosRequestHeaders;
}

export type IResponse = AxiosResponse;

export const onRequest = async (props: IRequestProps): Promise<AxiosResponse> => {
  const { method, url, data, headers, query } = props;

  try {
    switch (method) {
      case 'get':
        return await instance.get(url, { headers });
      case 'post':
        return await instance.post(url, data, { headers });
      case 'put':
        return await instance.put(url, data, { headers });
      case 'delete':
        return await instance.delete(url, { headers });
      default:
        return { status: 500, data: 'is not method' } as AxiosResponse;
    }
  } catch (e) {
    console.log('에러처리 로직 작성');
    return e as AxiosResponse;
  }
};
