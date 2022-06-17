// import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState, AppThunk } from '..';
import { UserLoginInfo, UserRequstData } from '@components/Sign/type';
import { fetchTokenRefresh, fetchUserLogin, fetchUserLogout } from '@api/auth';
import { push } from 'connected-react-router';
import Cookies from 'js-cookie';
// 초기값 타입
export interface UserState {
  readonly isLogin: boolean;
  authInfo: UserRequstData;
  dateEnd: number;
}

const authInfoData: UserRequstData = {
  access_token: '',
  expires_in: 0,
  refresh_expires_in: 0,
  token_type: '',
  user_permissions: [],
  user_group: '',
  user_id: '',
};

const initialState: UserState = {
  isLogin: false,
  authInfo: authInfoData,
  dateEnd: 0,
};

export const selectauthLogin = (state: RootState) => state.auth.isLogin;
export const selectauthInfo = (state: RootState) => state.auth.authInfo;

const remainingTime: number = 60;
// 로그인 미들웨어
export const authLoginData =
  (res: UserLoginInfo | null): AppThunk =>
  async (dispatch, getState) => {
    await fetchUserLogin(res)
      .then((res) => {
        if (res.data.code === '00') {
          const result = res.data.data;
          Cookies.set('refresh_token', result.refresh_token);
          delete result.refresh_token;
          const today: Date = new Date();
          const expiresIn: number = result.refresh_expires_in;
          const dateEnd: number = today.setSeconds(today.getSeconds() + expiresIn - remainingTime);
          localStorage.setItem('authInfo', JSON.stringify(result));
          localStorage.setItem('isLogin', JSON.stringify(true));
          localStorage.setItem('dateEnd', JSON.stringify(dateEnd));
          dispatch(push('/'));
          dispatch(authLogin());
          dispatch(authTime(dateEnd));
          dispatch(authUserInfo(result));
        } else if (res.data.code === '01') {
          alert('잘못된 요청입니다.');
        }
      })
      .catch((err) => {
        alert('잘못된 요청입니다.');
      });
  };

//로그아웃 미들웨어
export const authLogoutData = (): AppThunk => async (dispatch, getState) => {
  const token = { refreshToken: Cookies.get('refresh_token') };
  await fetchUserLogout(token).then((res) => {
    if (res.status === 200) {
      dispatch(authErrLogOut());
    } else if (res.status === 400) {
      dispatch(authErrLogOut());
    }
  });
};
// 로그아웃 기능
export const authErrLogOut = (): AppThunk => (dispatch, getState) => {
  window.localStorage.removeItem('authInfo');
  window.localStorage.removeItem('isLogin');
  window.localStorage.removeItem('dateEnd');
  Cookies.remove('refresh_token');
  dispatch(authReset());
  dispatch(push('/signin'));
};

// 토큰 리프레쉬
export const authRefresh = (): AppThunk => async (dispatch, getState) => {
  const authInfo = selectauthInfo(getState());
  const token = Cookies.get('refresh_token');
  const expiresIn = authInfo.refresh_expires_in;

  await fetchTokenRefresh({ refreshToken: token }).then((res) => {
    const result = res.data.data;
    const refreshInfo = {
      ...authInfo,
      access_token: result.access_token,
    };
    if (res.data.code === '00') {
      const today = new Date();
      const dateEnd = today.setSeconds(today.getSeconds() + expiresIn - remainingTime);
      Cookies.set('refresh_token', result.refresh_token);
      localStorage.setItem('dateEnd', JSON.stringify(dateEnd));
      localStorage.setItem('authInfo', JSON.stringify(refreshInfo));
      dispatch(authTime(dateEnd));
      dispatch(authUserInfo(refreshInfo));
    }
  });
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authLogin: (state) => {
      state.isLogin = true;
    },
    authLogout: (state) => {
      state.isLogin = false;
    },
    authUserInfo: (state, action: PayloadAction<UserRequstData>): void => {
      state.authInfo = action.payload;
    },
    authReset: (state) => {
      state.isLogin = false;
      state.authInfo = authInfoData;
      state.dateEnd = 0;
    },
    authTime: (state, action: PayloadAction<number>): void => {
      state.dateEnd = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

// 리듀서만 외부로 호출 할때
export const { authLogin, authLogout, authReset, authUserInfo, authTime } = authSlice.actions;

// configureStore에 reducer륿 병합 할때
export default authSlice.reducer;
