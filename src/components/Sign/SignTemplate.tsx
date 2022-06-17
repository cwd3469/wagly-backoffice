import { useState } from 'react';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Paper,
  Box,
  Grid,
  Typography,
} from '@mui/material';
import {
  LockOutlined as LockOutlinedIcon,
  GppGoodSharp as GppGoodSharpIcon,
} from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Pmodal from '@components/Common/Pmodal';
import { UserLoginInfo, Receiver, Verify } from './type';
import { fetchUserSearch, fetchSmsRequest, fetchAuthCodeCheck } from '@api/auth';
import { useAppDispatch } from '@store/hooks';
import { authLoginData } from '@store/modules/auth';
import Timer from '@components/Common/Timer';

const SignTemplate = () => {
  const theme = createTheme();
  const [authOpen, setAuthOpen] = useState<boolean>(false);
  const [errOpen, setErrOpen] = useState<boolean>(false);
  const [phoneNumErr, setPhoneNumErr] = useState<boolean>(false);
  const [phoneNum, setPhoneNum] = useState<string>('');
  const [phoneBtnActive, setPhoneBtnActive] = useState<boolean>(true);
  const [authCode, setAuthCode] = useState<boolean>(false);
  const [authCodeOn, setAuthCodeOn] = useState<string>('');
  const [authCodeErr, setAuthCodeErr] = useState<boolean>(false);
  const [timerErr, setTimerErr] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<UserLoginInfo>({ userId: '', password: '' });
  const [activation, setActivation] = useState<boolean>(true);

  const dispatch = useAppDispatch();

  const modalHandle = () => {
    setAuthCode(false);
    setAuthOpen(!authOpen);
    setPhoneNumErr(false);
    setAuthCodeErr(false);
  };
  const authinputControll = () => {
    setAuthCode(false);
    setAuthCodeErr(false);
    setActivation(true);
    setPhoneBtnActive(true);
    setTimerErr(true);
    setAuthCodeOn('');
    setPhoneNum('');
  };
  //아이디 패스웨드 확인 매소드
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const pw = data.get('password');
    const userId = data.get('userId');
    const userInfo: UserLoginInfo = {
      password: pw,
      userId: userId,
    };
    setUserInfo(userInfo);
    await fetchUserSearch(userInfo)
      .then((res) => {
        console.log(res);
        if (res.data.code === '00') {
          if (res.data.data.result === 'true') {
            modalHandle();
            setErrOpen(false);
          } else if (res.data.data.result === 'false') {
            setErrOpen(true);
          }
        } else if (res.data.code === '10') {
          setErrOpen(true);
        }

        if (res.status === 400) {
          setErrOpen(true);
        }
      })
      .catch((err) => {
        setErrOpen(true);
      });
  };

  //휴대폰번호 입력
  const checkPhoneInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTimerErr(false);
    const num = e.target.value;
    const onlyNumber = num.replace(/[^0-9]/g, '');
    if (onlyNumber.length <= 11) {
      setPhoneNum(onlyNumber);
      setPhoneBtnActive(true);
    }
    if (onlyNumber.length >= 11) {
      setPhoneBtnActive(false);
    }
  };

  //인증번호 보내기
  const authCodePost = async () => {
    const receiver: Receiver = {
      receiver: phoneNum,
      createUserId: userInfo.userId,
      createUserClient: 'BACKOFFICE',
    };
    const errMsg = () => {
      setAuthCode(false);
      setPhoneNumErr(true);
    };
    await fetchSmsRequest(receiver)
      .then((res) => {
        if (res.data.code === '00') {
          if (res.data.data.result === 'true') {
            setAuthCode(true);
            setPhoneNumErr(false);
          } else if (res.data.data.result === 'false') {
            errMsg();
          }
        } else if (res.data.code === '10') {
          errMsg();
        }
        if (res.status === 400) {
          errMsg();
        }
      })
      .catch((err) => {
        errMsg();
      });
  };

  // 인증번호 입력
  const AuthCodeinput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const num = e.target.value;
    const onlyNumber = num.replace(/[^0-9]/g, '');
    if (onlyNumber.length <= 6) {
      setAuthCodeOn(onlyNumber);
      setActivation(true);
    }
    if (onlyNumber.length >= 6) {
      setActivation(false);
    }
  };

  // 인증번호 확인
  const checkAuthCodePost = async () => {
    const receiver: Verify = {
      receiver: phoneNum,
      certificationNumber: authCodeOn,
    };
    await fetchAuthCodeCheck(receiver)
      .then(async (res) => {
        console.log(res);
        if (res.data.code === '00') {
          if (res.data.data.result === 'true') {
            dispatch(authLoginData(userInfo));
          } else if (res.data.data.result === 'false') {
            setAuthCodeErr(true);
          }
        } else if (res.data.code === '01') {
          setAuthCodeErr(true);
        }
      })
      .catch((err) => {
        setAuthCodeErr(true);
      });
  };
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        component="main"
        sx={{ height: '100vh' }}
        data-testid="sign-page"
        justifyContent="center"
      >
        <CssBaseline />
        <Grid item xs={12} sm={12} md={12} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="userId"
                label="Email Address"
                name="userId"
                autoComplete="userId"
                data-testid="userId"
                autoFocus
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                data-testid="password"
                autoComplete="current-password"
              />

              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Sign In
              </Button>
              <Grid container sx={{ color: 'red' }}>
                {errOpen ? '아이디 혹은 비밀번호를 잘못 입력하셨습니다.' : ''}
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
      {/* 인증 모달 창 */}
      <Pmodal open={authOpen} handleClose={modalHandle} width="600px">
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={3}
          sx={{ gap: '15px', padding: '10px', margin: '0px', width: '100%' }}
        >
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{ marginBottom: '10px', gap: '5px' }}
          >
            <GppGoodSharpIcon color="secondary" sx={{ fontSize: 60 }} />
            <div>문자 인증 받기</div>
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            className="phoneNumInput"
            sx={{
              gap: '10px',
            }}
          >
            <TextField
              onChange={checkPhoneInput}
              label="휴대폰번호를 입력 해주세요"
              placeholder="휴대폰번호를 입력 해주세요"
              value={phoneNum}
              sx={{ width: '300px' }}
              onKeyPress={(e) => {
                if (e.key === 'Enter' && authCode === false) {
                  authCodePost();
                }
              }}
            />
            <Button
              variant="contained"
              sx={{ height: '100%', width: '150px' }}
              onClick={authCodePost}
              disabled={phoneBtnActive}
            >
              인증번호 보내기
            </Button>
          </Grid>

          {phoneNumErr ? (
            <Typography
              variant="subtitle2"
              gutterBottom
              component="div"
              sx={{ color: 'red', textAlign: 'center' }}
            >
              입력하신 번호가 맞지 않습니다.
            </Typography>
          ) : (
            ''
          )}

          {authCode ? (
            <>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{
                  gap: '10px',
                }}
              >
                <TextField
                  id="auth-check"
                  label="인증번호 입력"
                  value={authCodeOn}
                  onChange={AuthCodeinput}
                  sx={{ width: '300px' }}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && authCode === true) {
                      checkAuthCodePost();
                    }
                  }}
                />
                <Button
                  variant="contained"
                  sx={{ height: '100%', width: '150px' }}
                  onClick={checkAuthCodePost}
                  disabled={activation}
                >
                  인증번호 확인
                </Button>
              </Grid>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{
                  gap: '10px',
                }}
              >
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  component="div"
                  sx={{ textAlign: 'center' }}
                >
                  남은 시간 :
                </Typography>
                <Timer initialMinute={2} initialSeconds={59} close={authinputControll} />
              </Grid>
            </>
          ) : (
            ''
          )}
          {authCodeErr ? (
            <Typography
              variant="subtitle2"
              gutterBottom
              component="div"
              sx={{ color: 'red', textAlign: 'center' }}
            >
              {' '}
              인증번호가 잘못 되었습니다. 다시 확인 해주시길 바랍니다
            </Typography>
          ) : (
            ''
          )}
          {timerErr ? (
            <Typography
              variant="subtitle2"
              gutterBottom
              component="div"
              sx={{ color: 'red', textAlign: 'center' }}
            >
              {' '}
              시간이 초과 되었습니다. 다시 휴대폰 번호를 입력해주시길 바랍니다.
            </Typography>
          ) : (
            ''
          )}
        </Grid>
      </Pmodal>
    </ThemeProvider>
  );
};
export default SignTemplate;
