import Cookie from 'js-cookie';
import axios from 'axios';
import { getHeader } from '@/utils/token';

const userCookie = Cookie.get('user');
const tokenHeader = userCookie && JSON.parse(userCookie).tokenHeader || '';

export function createAPI({ url, headers, paramsSerializer }) {
  const instance = axios.create({
    headers,
    paramsSerializer,
    baseURL: `${url}`,
    timeout: 30000,
  });

  instance.interceptors.request.use(
    (request: any): any => {
      const api = request.url;
      const path = api.indexOf('?') > 0 ? api.split('?')[0] : api;
      const vheader = getHeader(path);
      if (vheader) {
        request.headers[tokenHeader || 'vheader'] = JSON.stringify(vheader);
      }
      if (request.method === 'get') {
        request.headers.common.Pragma = 'no-cache';
        request.headers.common['Cache-control'] = 'no-cache';
      }

      return request;
    },
    (errorData: any): any => {
      return Promise.reject(errorData);
    },
  );

  instance.interceptors.response.use(
    (response: any): any => {
      if (response.data.code !== 200) {
        return Promise.reject({ response });
      }

      return response || {};
    },
    (errorData: any): any => {
      return Promise.reject(errorData);
    },
  );

  return instance;
}
