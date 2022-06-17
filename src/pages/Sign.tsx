import React from 'react';
import SignTemplate from '@components/Sign/SignTemplate';
import { selectuserLogin } from '@store/modules/user';
import { useAppSelector } from '@store/hooks';
import '@assets/scss/sign.scss';
function Sign() {
  const Login = useAppSelector(selectuserLogin);

  return <SignTemplate />;
}

export default Sign;
