import _ from 'lodash';
import Cookie from 'js-cookie';
import { encrypt } from '@/utils/crypto';

export const toFixedVersion = (version: string, floatLength?: number) => {
  const list = `${version}`.replace(/_/g, '.').split('.');
  const str = `${list[0]}.${(list[1] || '0')}`;
  return Number(str).toFixed(floatLength || 1);
};

export const getBrowser = () => {
  const ua = navigator.userAgent.toLowerCase();
  const rulesObject = {
    ie: /msie ([\d.]+)/,
    firefox: /firefox\/([\d.]+)/,
    chrome: /chrome\/([\d.]+)/,
    opera: /opera.([\d.]+)/,
    safari: /version\/([\d.]+).*safari/,
  };

  const rule = _.findKey(rulesObject, (ru) => !!ua.match(ru));
  const version = ua.match(rulesObject[rule])[1];

  return `${rule} ${version}`;
};

export const queryPar = (val: object): string => {
  const list = [];
  for (const key in val) {
    list.push(`${key}=${val[key]}`);
  }
  return list.join(';');
};

export const timeDiff = (time: any) => {
  const nowLocalTime = +Date.now();

  // 最新服务器时间 = 最新本地时间 + (服务器时间 - 初始化本地时间)
  return nowLocalTime + (time.serverTime - time.localTime);
};

export const getHeader = (url: string): object => {
  // * signature：签名：md5(url+"sambawake"+memberId+token(去掉前三位和后三位)+appVersion+udid+apiVersion+platformType+sendTime)
  const userCookie = Cookie.get('user');
  if (!userCookie) {
    return null;
  }

  const user = JSON.parse(userCookie);
  const { memberId = '', token = '' } = user;
  const time = JSON.parse(Cookie.get('time'));
  const sendTime = timeDiff(time);

  const object = {
    sendTime,
    memberId, // 用户id，登陆获取
    token, // 登陆获取到的token
    appVersion: '1.0.0',
    apiVersion: '1.0.0',
    udid: getBrowser(), // 取浏览器内核版本
    platformType: 'WEB',
  };
  const signature = encrypt(`${url}sambawake${memberId}${token.slice(3, -3)}${object.appVersion}${object.udid}${object.apiVersion}${object.platformType}${sendTime}`);

  return {
    ...object,
    signature,
  };
};
