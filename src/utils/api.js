import axios from 'axios';
import store from '../store';
import { hideLoader } from '../actions/ui';
import { startLogout } from '../actions/auth';

export const axiosSetup = () => {
  const { dispatch } = store;
  const UNAUTHORIZED = 401;
  axios.interceptors.response.use(
    response => response,
    error => {
      dispatch(hideLoader());
      const { status } = error.response ? error.response : 500;

      if (status === UNAUTHORIZED) {
        dispatch(startLogout());
      }

      console.error(error);
      return Promise.reject(error);
    }
  );
};

export const axiosGet = (url, extraConfigs = {}) => {
  const accessToken = store.getState().auth.accessToken;
  const config = {
    headers: {
      Authorization: 'bearer ' + accessToken,
      type: 'application/json'
    },
    timeout: 300000, // 5 min timeout
    ...extraConfigs
  };
  return axios.get(url, config);
};

export const axiosPost = (url, data, extraConfigs = {}) => {
  const accessToken = store.getState().auth.accessToken;
  const config = {
    headers: {
      Authorization: 'bearer ' + accessToken,
      type: 'application/json'
    },
    timeout: 300000, // 5 min timeout
    ...extraConfigs
  };
  return axios.post(url, data, config);
};
