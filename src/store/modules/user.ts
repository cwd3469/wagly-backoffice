import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { RootState, AppThunk } from '..';
import { fetchUserPacerList } from '@api/user';
import { UserPacertype } from '@components/User/UserPacer/type';
import { UserStoretype } from '@components/User/UserStore/type';
import ListData from '@mocks/mockTestData.json';
// 초기값 타입
export interface UserState {
  userPacerList: UserPacertype[];
  userStoreList: UserStoretype[];
}

const semple = {
  id: 0,
  accountCreateDate: '',
  userId: '',
  tradeName: '',
  busiessNum: '',
  mileage: '',
  state: '',
  marketing: '',
};

const initialState: UserState = {
  userPacerList: ListData,
  userStoreList: [semple],
};

export const selectuserLogin = (state: RootState) => state.auth.isLogin;
export const selectuserInfo = (state: RootState) => state.auth.authInfo;
export const location = (state: RootState) => state.router;

export const userPacerListDataGetData = (): AppThunk => async (dispatch, getState) => {
  const { isLogin, authInfo } = getState().auth;
  const token: string = `${authInfo.token_type} ${authInfo.access_token}`;
  if (isLogin) {
    await fetchUserPacerList(token)
      .then((res) => {
        console.log(res);
        dispatch(userPacerListDataGet(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

// 비동기 처리 reducer state 값을 변경 할때
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userPacerListDataGet: (state, action: PayloadAction<UserPacertype[]>) => {
      state.userPacerList = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

// 리듀서만 외부로 호출 할때
export const { userPacerListDataGet } = userSlice.actions;

// configureStore에 reducer륿 병합 할때
export default userSlice.reducer;
