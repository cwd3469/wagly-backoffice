import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import Pmodal from './Pmodal';
import { useAppDispatch } from '@store/hooks';
import { authLogoutData, authRefresh } from '@store/modules/auth';
import Timer from '@components/Common/Timer';
interface Props {
  open: boolean;
  close: () => void;
}

const AuthModal = (props: Props) => {
  const { open, close } = props;
  const dispatch = useAppDispatch();
  const clickTokenRefresh = () => {
    dispatch(authRefresh());
    close();
  };
  const clickLogOut = () => {
    dispatch(authLogoutData());
    close();
  };

  return (
    <Pmodal open={open}>
      <Grid container direction="column" justifyContent="center" alignItems="center" gap="3px">
        <Typography variant="h6" gutterBottom component="div">
          로그인 제한 시간이 앞으로 1분 남았습니다. 연장 하시겠습니까?
        </Typography>
        <Typography variant="subtitle2" gutterBottom component="div">
          연장 하시지 않으시면 자동 로그아웃 됩니다.
        </Typography>
        <Timer initialMinute={0} initialSeconds={59} close={clickLogOut} size="xx-large" />
        <Grid container direction="row" justifyContent="center" alignItems="center" gap="10px">
          <Button variant="contained" onClick={clickTokenRefresh}>
            네
          </Button>
          <Button variant="contained" onClick={clickLogOut}>
            아니요
          </Button>
        </Grid>
      </Grid>
    </Pmodal>
  );
};

export default AuthModal;
