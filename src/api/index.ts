import { AxiosInstance, AxiosRequestHeaders, AxiosResponse } from "axios";
import customAxiosInstance from "./instance";

export const END_POINT = "http://localhost:3000";

export const instance = customAxiosInstance();

export interface IRequestProps {
  instance?: AxiosInstance;
  url: string;
  method: "get" | "post" | "put" | "delete" | "patch";
  query?: Record<string, unknown>;
  data?: unknown;
  headers?: AxiosRequestHeaders;
}

export type IResponse = AxiosResponse;

export const onRequest = async (props: IRequestProps): Promise<IResponse> => {
  const { method, url, data, headers } = props;

  try {
    switch (method) {
      case "get":
        return await instance.get(url, { headers });
      case "post":
        return await instance.post(url, data, { headers });
      case "put":
        return await instance.put(url, data, { headers });
      case "delete":
        return await instance.delete(url, { headers });
      case "patch":
        return await instance.patch(url, data, { headers });
    }
  } catch (e: any) {
    if (e.message === "Network Error") {
      return { status: 500, data: "Network Error" } as IResponse;
    }
    const { response } = e;

    return { status: response.status, data: response.data.message } as IResponse;
  }
};
