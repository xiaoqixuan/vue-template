import Vue from 'vue';
import VueI18n from 'vue-i18n';
import locale from 'element-ui/lib/locale';
import enLocale from 'element-ui/lib/locale/lang/en';
import cnLocale from 'element-ui/lib/locale/lang/zh-CN';
import ptLocale from 'element-ui/lib/locale/lang/pt-br';

const en = require('./en-US/en-US.json');
const cn = require('./zh-CN/zh-CN.json');
const pt = require('./pt-BR/pt-BR.json');

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'en-US',
  fallbackLocale: 'en-US',
  messages: {
    'en-US': { ...enLocale, ...en },
    'zh-CN': { ...cnLocale, ...cn },
    'pt-BR': { ...ptLocale, ...pt },
  },
});

locale.i18n((key, value) => i18n.t(key, value));

export default i18n;
