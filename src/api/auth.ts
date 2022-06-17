import instance from '.';
import { UserLoginInfo, RefreshToken, Receiver, Verify } from '@components/Sign/type';

//유저 존재 여부 확인
export const fetchUserSearch = (userInfo: UserLoginInfo) => {
  return instance({
    method: 'post',
    url: `auth/backoffice/${userInfo.userId}/check`,
    data: { password: userInfo.password },
  });
};

// SMS 문자 인증 요청
export const fetchSmsRequest = (receiver: Receiver) => {
  return instance({
    method: 'post',
    url: 'auth/sms-certificate/request',
    data: receiver,
  });
};

//SMS 문자번호 검증
export const fetchAuthCodeCheck = (receiver: Verify) => {
  return instance({
    method: 'post',
    url: 'auth/sms-certificate/verify',
    data: receiver,
  });
};

// SMS인증 후 백오피스 로그인
export const fetchUserLogin = (userData: UserLoginInfo | null) => {
  return instance({
    method: 'post',
    url: 'auth/back-office/signin',
    data: userData,
  });
};

// 백오피스 로그아웃
export const fetchUserLogout = (token: RefreshToken) => {
  return instance({
    method: 'post',
    url: 'auth/backoffice/logout',
    data: token,
  });
};

// 토큰 리프레쉬
export const fetchTokenRefresh = (refreshToken: RefreshToken) => {
  return instance({
    method: 'post',
    url: 'auth/backoffice/refresh',
    data: refreshToken,
  });
};
