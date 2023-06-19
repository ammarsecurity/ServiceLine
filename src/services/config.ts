/**
 * You can modify this file
 *
 * @version 6
 *
 */
import Axios, {
  AxiosRequestConfig,
  AxiosError,
  AxiosResponse,
  AxiosInstance,
} from "axios";
//@ts-ignore
import qs from "qs";
import axiosIns, { apiBaseUrl } from "@/lib/http/http";

const baseConfig: AxiosRequestConfig = {
  baseURL: apiBaseUrl, // <--- Add your base url
  headers: {
    "Content-Encoding": "UTF-8",
    Accept: "application/json",
    "Content-Type": "application/json-patch+json",
  },
  // @ts-ignore
  paramsSerializer: (param: any) => qs.stringify(param, { indices: false }),
};

let axiosInstance: AxiosInstance = axiosIns;

function getAxiosInstance(security: Security): AxiosInstance {
  if (!axiosInstance) {
    axiosInstance = Axios.create(baseConfig);

    // Response interceptor
    axiosInstance.interceptors.response.use(
      (async (response: AxiosResponse): Promise<SwaggerResponse<any>> => {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        /**
         * Example on response manipulation
         *
         * @example
         *   const swaggerResponse: SwaggerResponse = {
         *     ...response,
         *   };
         *   return swaggerResponse;
         */
        return response.data;
      }) as any,
      (error: AxiosError) => {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error

        if (error.response) {
          return Promise.reject(
            new RequestError(
              error.response.data as string,
              error.response.status,
              error.response
            )
          );
        }

        if (error.isAxiosError) {
          return Promise.reject(new RequestError("noInternetConnection"));
        }
        return Promise.reject(error);
      }
    );
  }

  return axiosInstance;
}

class RequestError extends Error {
  constructor(
    public message: string,
    public status?: number,
    public response?: AxiosResponse
  ) {
    super(message);
  }

  isApiException = true;

  static isRequestError(error: any): error is RequestError {
    return error.isApiException;
  }
}

export type Security = any[] | undefined;

// export interface SwaggerResponse<R> extends AxiosResponse<R> {}
export type SwaggerResponse<R> = AxiosResponse<R>;

export { getAxiosInstance, RequestError };
