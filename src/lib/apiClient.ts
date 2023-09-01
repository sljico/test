import Axios from "axios";
import storage from "../utils/storage";

const BASE_URL = "https://ticket-master-api.up.railway.app/";

function authRequestInterceptor(config: any) {
  const token = storage.getToken();
  console.log("token => ", token);
  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }
  config.headers.Accept = "application/json";
  return config;
}

export const axios = Axios.create({
  baseURL: BASE_URL,
});

axios.interceptors.request.use(authRequestInterceptor);
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
