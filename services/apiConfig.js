import axios from 'axios';
import configs from './configs';

const API = axios.create({
  baseURL: configs.API_URL,
  timeout: 30000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

API.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response) {
            return Promise.reject({ code: error.response.status, message: error.response.data.message }) // eslint-disable-line
    }

    if (error.request) {
            return Promise.reject({ message: 'No response was received' }) // eslint-disable-line
    }

    return Promise.reject(error);
  }
);

const setToken = token => { // eslint-disable-line
  API.defaults.headers.common.Authorization = token;
};

export { API, setToken };
