import { UserInfo, RootState } from './interface';

export default {
  CHANGE_LANGUAGE: (state: RootState, lang: string) => {
    state.lang = lang;
  },
  CHANGE_ROUTER_BASE: (state: RootState, routerBase: string) => {
    state.routerBase = routerBase;
  },
  CHANGE_LOGIN_STATE: (state: RootState, isLogin: boolean) => {
    state.isLogin = isLogin;
  },
  CHANGE_USER_INFO: (state: RootState, userInfo: UserInfo) => {
    state.userInfo = userInfo;
  },
};
