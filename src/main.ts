import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import I18n from './i18n';
import { LANGUAGE } from '@/constants';
import '@/assets/iconfont/iconfont.css';
import './plugins/element';
import './validate';
import 'babel-polyfill';
import FBSignInButton from 'vue-facebook-signin-button';
import directive from './directive';
import * as filters from './filters';

Vue.use(FBSignInButton);

Object.keys(directive).forEach((key) => {
  Vue.directive(key, directive[key]);
});

Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});

Vue.config.productionTip = false;

const i18n = I18n;
i18n.locale = LANGUAGE;

new Vue({
  i18n,
  router,
  store,
  mounted() {
    document.dispatchEvent(new Event('render-event'));
  },
  render: h => h(App),
}).$mount('#app');
