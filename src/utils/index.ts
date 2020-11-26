import _ from 'lodash';
import Cookie from 'js-cookie';
// import './Date';

interface RegisterEvent {
  (
    ele: EventTarget | any,
    eType: string,
    handler: EventListenerOrEventListenerObject,
  ): (
      type: string,
      handler?: EventListenerOrEventListenerObject,
      options?: boolean | EventListenerOptions,
    ) => void;
}

export function parseMeta(
  metaList: Array<string>,
  routerParams: any,
): Array<string> {
  return _.map(metaList, (meta: string) => {
    const reg: RegExp = /(?::([^:]+))+/;

    if (reg.test(meta)) {
      return _.reduce(
        _.drop(meta.split(':')).map(
          (key: string): string => routerParams[key] || key,
        ),
        (all: string, single: string): string => `${all}/${single}`,
      );
    }

    return meta;
  });
}

export function translateRegx(str: string = ''): string {
  if (!str) return '';

  const val = str.toString();

  return val.replace(/([*.?+&^\[\]\(\)\{\}\|\\])/g, '\\$1');
}

export function capitalize(value?: string): string {
  if (!value) return '';

  const val = value.toString();

  return val.charAt(0).toUpperCase() + val.slice(1).toLowerCase();
}

export const addHandler: RegisterEvent = (ele, eType, handler) => {
  if (ele.addEventListener) {
    const options: boolean = false;
    return ele.addEventListener(eType, handler, options);
  }

  return ele.attachEvent(`on${eType}`, handler);
};

export const removeHandler: RegisterEvent = (ele, eType, handler) => {
  if (ele.removeEventListener) {
    const options: boolean = false;
    return ele.removeEventListener(eType, handler, options);
  }

  return ele.detachEvent(`on${eType}`, handler);
};
export interface URLMeta {
  protocol: string;
  host: string;
  hostname: string;
  port: string;
  pathname: string;
  search: string;
  searchObject: { [key: string]: string };
  hash: string;
}

const defaultVal: URLMeta = {
  protocol: '',
  host: '',
  hostname: '',
  port: '',
  pathname: '',
  search: '',
  searchObject: {},
  hash: '',
};

export const parseURL = (url: string): URLMeta => {
  if (typeof document === 'undefined') {
    return defaultVal;
  }

  const parser: HTMLAnchorElement = document.createElement('a');
  const searchObject: { [key: string]: string } = {};
  let queries: Array<string> = [];
  let split: Array<string> = [];

  parser.href = url;
  queries = parser.search.replace(/^\?/, '').split('&');

  for (let i: number = 0; i < queries.length; i++) {
    split = queries[i].split('=');
    searchObject[split[0]] = split[1];
  }

  return {
    searchObject,
    protocol: parser.protocol,
    host: parser.host,
    hostname: parser.hostname,
    port: parser.port,
    pathname: parser.pathname,
    search: parser.search,
    hash: parser.hash,
  };
};

export enum ACTION {
  ADD,
  EDIT,
}

export const getStringSize = (str: string): number => {
  let len = 0;

  for (let i = 0; i < str.length; i++) {
    const ch = str.charAt(i).charCodeAt(0);
    let charByteSize = 0;

    if (ch <= 0x00007F) {
      charByteSize = 1;
    } else if (ch <= 0x0007FF) {
      charByteSize = 2;
    } else if (ch <= 0x00FFFF) {
      charByteSize = 3;
    } else {
      charByteSize = 4;
    }

    len += charByteSize;
  }

  return len;
};

export const getDate = (time) => {
  const date = typeof time !== 'number' && /^[0-9]*$/.test(time) ? Number(time) : time;
  return new Date(date);
};

export const getTimeZoneLabel = () => {
  return ` (UTC${new Date().getTimeZone()})`;
};

export const getTimeZone = () => {
  const offset = new Date().getTimezoneOffset();
  const o = Math.abs(offset);

  return `${(offset < 0 ? '+' : '-')}${`00${Math.floor(o / 60)}`.slice(-2)}:${`00${Math.floor(o % 60)}`.slice(-2)}`;
};

export const isNaturalNumber = (strNumber) => {
  const type = typeof strNumber;

  if (type !== 'number' && type !== 'string') {
    return false;
  }

  return /^[0-9]+$/.test(strNumber);
};

export const encodeToString = (params) => {
  const parameterStr = Object.keys(params)
    .map((key) => {
      return `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`;
    })
    .join('&');

  return parameterStr;
};

export const byteSizeString = (size: number, limit: number, withSuffix: boolean): string => {
  let value: string = '0';
  const isUseKByte: boolean = limit > 1024;

  if (isUseKByte) {
    value = `${(size / 1024).toFixed(4)}`.replace('.0000', '');
  } else {
    value = `${size}`;
  }

  return withSuffix ? `${value} ${isUseKByte ? 'KBytes' : 'Bytes'}` : `${value}`;
};
