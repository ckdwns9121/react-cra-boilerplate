/*eslint-disable*/
import axios, { InternalAxiosRequestConfig } from "axios";
import { END_POINT } from ".";

export const getAccessToken = (): string | null => {
  return localStorage.getItem("access_token");
};

export const getRefreshToken = (): string | null => {
  return localStorage.getItem("refresh_token");
};

const customAxiosInstance = () => {
  const axiosInstance = axios.create({
    baseURL: END_POINT,
    headers: {
      "Cache-Control": "no-cache",
    },
  });

  // HTTP status가 2xx일 때 처리하고 싶은 로직이 있으면 onFulfilled에서 처리
  const onFulfilled = (res: any) => {
    return res;
  };

  // response에 에러가 있을 시.
  const onRejected = async (e: any) => {
    const { config, response } = e;
    const originalRequest = config;
    if (response?.config?.url === "/auth/logout" || response?.config?.url === "/auth/login") {
      return Promise.reject(e);
    }

    // 액세스 토큰이 만료되었을 시
    if (response.status === 401) {
      const refresh_token = getRefreshToken();

      //axios 설정
      const url = `${END_POINT}/auth/refresh`;
      const res = await axios.post(url, { refresh_token }, {});
      const new_access_token = res.data.access_token;
      localStorage.setItem("access_token", new_access_token);

      // 토큰 셋팅
      axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${new_access_token}`;
      originalRequest.headers["Authorization"] = `Bearer ${new_access_token}`;
      return await axios(originalRequest);
    }
    return Promise.reject(e);
  };

  // 요청전 수행할 일.
  const requestPrev = async (config: InternalAxiosRequestConfig) => {
    console.log(config.url);
    if (config?.url === "/auth/login" || config?.url === "/auth/logout") {
      return config;
    }
    const access_token = getAccessToken();
    console.log(access_token);
    if (access_token) {
      if (config?.headers) {
        config.headers.Authorization = "Bearer " + access_token;
      }
    }
    return config;
  };

  // 요청전 에러가 있다.
  const requestError = (e: any) => Promise.reject(e);

  axiosInstance.interceptors.request.use(requestPrev, requestError);
  axiosInstance.interceptors.response.use(onFulfilled, onRejected);
  return axiosInstance;
};

export default customAxiosInstance;
