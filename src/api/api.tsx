import axios from "axios";

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
        return Promise.reject(error);
      }
  );
  return api;
};

