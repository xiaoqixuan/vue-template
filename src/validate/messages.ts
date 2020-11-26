import VueI18n from 'vue-i18n';
import { LANGUAGE } from '@/constants';

const en = require('@/i18n/en-US/en-US.json').validate;
const cn = require('@/i18n/zh-CN/zh-CN.json').validate;
const pt = require('@/i18n/pt-BR/pt-BR.json').validate;

const i18n = new VueI18n({
  locale: LANGUAGE,
  messages: {
    'en-US': en,
    'zh-CN': cn,
    'pt-BR': pt,
  },
});

export const messages = {
  required: i18n.tc('customRequired'),
  ipAddress: i18n.tc('ipAddress'),
  initScriptName: i18n.tc('domain'),
  email: i18n.tc('email'),
  fixedLength: i18n.tc('fixedLength'),
  areaLength: i18n.tc('areaLength'),
};
