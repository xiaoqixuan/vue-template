
export interface UserInfo {
  memberId: number | string;
  accountName?: string;
  logo?: string;
  point?: number;
  sysMessageCnt?: number;
  messageCnt?: number;
  hasFavorite?: boolean;
  level?: number;  
}

export interface RootState {
  lang: string;
  routerBase: string;
  isLogin: boolean;
  vHeader: any;
  userInfo: UserInfo;
}
