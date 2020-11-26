import Cookie from 'js-cookie';

export const DEFAULT_PAGE = 1;
export const DEFAULT_PAGE_SIZE = 10;
export const LANGUAGE = Cookie.get('lang') || 'en-US';
export const PRODUCT_PAGE = 0;
export const PRODUCT_PAGE_SIZE = 20;
export const PAYMENT_CURRENCY = 'R$';
export const PRODUCT_PAGE_INFO = {
  page: 0,
  size: 20,
  totalPage: 0,
  totalNum: 0,
};

export const GENDER_MAP = {
  MALE: 'male',
  FEMALE: 'female',
  SECURITY: 'security',
};

export const ORDER_STATUS_MAP = {
  UN_PAY: 'unPay', // '待支付',
  PAY: 'pay', // '待发货',
  DELIVERY: 'delivery', // '待收货',
  FINISH: 'finish', // '已完成',
  CLOSE: 'close', // '已取消',
  INVALID: 'invalid', // '无效'
  PENDING: 'paying',
};

export const LOGISTICS_STATUS_MAP = {
  WAITING_FOR_PACKAGE: 'waitingForPackage', // '待揽收',
  TRANSPORT: 'transport', // '运输中',
  DELIVER: 'deliver', // '派送中',
  SING_FOR: 'signFor', // '已签收',
};
