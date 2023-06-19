import axios from "axios";
export const apiBaseUrl: string = import.meta.env.VITE_apiBaseUrl;
export const apiUrl: string = apiBaseUrl;
const axiosIns = axios.create({
  baseURL: apiUrl,
});
axiosIns.interceptors.request.use(
  (config) => {
    let token = window.localStorage.getItem("accessToken");
    config.headers["Authorization"] = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default axiosIns;
