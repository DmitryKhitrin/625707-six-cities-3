import axios from "axios";
import {history} from "../utils/history.js";

export const makeApi = () => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-3.appspot.com/six-cities`,
    timeout: 5000,
    withCredentials: true
  });
  api.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        const {status} = error.response;
        if (error && status === 401 || status === 400) {
          history.push(`/login`);
        }
        return Promise.reject(error);
      }
  );
  return api;
};

