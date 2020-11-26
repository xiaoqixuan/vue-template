import { createAPI } from './create-api';
import { Header } from 'CommonTypes';
import { AxiosInstance } from 'axios';
import Qs from 'qs';

const paramsSerializer = (params) => {
  return Qs.stringify(params, { arrayFormat: 'repeat' });
};

export const apiCreator: (headers: Header) => AxiosInstance = (headers: Header) => {
  return createAPI({
    paramsSerializer,
    url: '/api',
    headers: headers || {},
  });
};
