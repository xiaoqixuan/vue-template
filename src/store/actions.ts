// import $httpUser from '@/api/user';
// import { LoginParams } from 'UserTypes';
// import Cookie from 'js-cookie';

export default {
  // login({ commit, rootState }: any, param: LoginParams) {
  //   return $httpUser.login(param, rootState.vHeader).then((data: any) => {
  //     const { memberId = '', token = '', tokenHeader = '' } = data.data.data || {};
  //     commit('CHANGE_LOGIN_STATE', true);
  //     Cookie.set('user', { memberId, token, tokenHeader });

  //     return data;
  //   });
  // },
  // logout({ commit, rootState }: any, param: any) {
  //   return $httpUser.logout(param, rootState.vHeader).then((data: any) => {
  //     commit('CHANGE_LOGIN_STATE', false);
  //     Cookie.remove('user');

  //     return data;
  //   });
  // },
  // getUserInfo({ commit, rootState }: any, memberId: number | string) {
  //   return $httpUser.getUserInfo(memberId, rootState.vHeader).then((data: any) => {
  //     commit('CHANGE_USER_INFO', data.data.data || {});

  //     return data;
  //   });
  // },
};
