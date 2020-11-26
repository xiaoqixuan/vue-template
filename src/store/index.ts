import Cookie from 'js-cookie';
import Vue from 'vue';
import Vuex from 'vuex';
import { LANGUAGE } from '@/constants';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);
const userCookie = Cookie.get('user');
const memberId = userCookie && JSON.parse(userCookie).memberId || '';

export default new Vuex.Store({
  actions,
  mutations,
  getters,
  state: {
    isLogin: !!userCookie,
    lang: LANGUAGE,
    routerBase: '',
    vHeader: {},
    userInfo: {
      memberId,
    },
  },
  modules: {},
});
