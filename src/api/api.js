import axios from "axios";
import {history} from "../history.js";

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
        if (error && error.response.status === 401) {
          history.push(`/login`);
        }
        return Promise.reject(error);
      }
  );
  return api;
};

