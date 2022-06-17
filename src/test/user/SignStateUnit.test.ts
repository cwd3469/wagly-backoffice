import { store } from '@store/index';
import { authLogin, authLogout } from '@store/modules/auth';

describe('상태관리 단위 테스트', () => {
  test('Login 상태 확인', () => {
    let state = store.getState().auth;
    const isLogin: boolean = state.isLogin;
    expect(isLogin).toBeFalsy();
  });
  test('authLogin action 상태 변경 확인 ', () => {
    store.dispatch(authLogin());
    let state = store.getState().auth;
    const lsLoging: boolean = state.isLogin;
    expect(lsLoging).toBeTruthy();
  });
  test('userLogout action 상태 변경 확인 ', () => {
    store.dispatch(authLogout());
    let state = store.getState().auth;
    const lsLoging: boolean = state.isLogin;
    expect(lsLoging).toBeFalsy();
  });
});
