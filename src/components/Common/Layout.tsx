import { useState, useEffect } from 'react';
import type { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import {
  Drawer as MuiDrawer,
  AppBar as MuiAppBar,
  CssBaseline,
  Toolbar,
  List,
  Box,
  Typography,
  Divider,
  IconButton,
  Container,
} from '@mui/material';
import { Menu as MenuIcon, Logout } from '@mui/icons-material';
import LayoutItems from './LayoutItems';
import { authLogoutData } from '@store/modules/auth';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import AuthModal from './AuthModal';

// open type
interface AppBarProps extends MuiAppBarProps {
  readonly open?: boolean;
}

type PropsData = {
  children: JSX.Element;
};

// 사이드바 길이
const drawerWidth = 240;

const mdTheme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      contrastText: 'white',
    },
    secondary: {
      main: '#fff',
      contrastText: '000',
    },
    error: {
      main: '#ef5350',
      contrastText: 'white',
    },
  },
});

//mui 커스텀 컴퍼넌트  => 레이아웃 헤더
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

//mui 커스텀 컴퍼넌트  => 사이드 탭
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: 0,
      }),
    },
  })
);

//레이아웃
function Layout(props: PropsData) {
  const { children } = props;
  const dispatch = useAppDispatch();
  const [hanble, setHanble] = useState<boolean>(false);
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const closeModal = () => {
    setHanble(false);
  };
  const dateEnd: number = useAppSelector((state) => state.auth.dateEnd);

  useEffect(() => {
    const Timer = setInterval(() => {
      const today = new Date();
      const dateNow = today.setSeconds(today.getSeconds());
      if (dateNow > dateEnd) {
        setHanble(true);
      } else {
        setHanble(false);
      }
    }, 1000);

    return () => {
      clearInterval(Timer);
    };
  });

  return (
    <>
      <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: 'flex', minWidth: '860px' }}>
          <CssBaseline />
          {/* 레이아웃 헤더 */}
          <AppBar position="absolute" open={open} color="secondary">
            <Toolbar
              sx={{
                pr: '24px',
                minHeight: '48px',
              }}
            >
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer}
                sx={{
                  marginRight: '36px',
                }}
              >
                <MenuIcon fontSize="small" />
              </IconButton>
              <Typography
                component="h6"
                variant="body2"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1, textAlign: 'center' }}
              >
                Pacing_최고 관리자님
              </Typography>
              <IconButton
                color="inherit"
                onClick={() => {
                  dispatch(authLogoutData());
                }}
              >
                <Logout fontSize="small" />
              </IconButton>
            </Toolbar>
          </AppBar>
          {/* 사이드 텝  */}
          <Drawer variant="permanent" open={open}>
            <Toolbar
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                px: [1],
              }}
            ></Toolbar>
            <Divider />
            <List
              component="nav"
              sx={{
                padding: '0px',
              }}
            >
              <LayoutItems />
            </List>
          </Drawer>

          {/* 페이지 컨텐츠 */}
          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
              flexGrow: 1,
              height: '100vh',
              overflow: 'auto',
            }}
          >
            <Toolbar />
            <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
              {children}
            </Container>
          </Box>
        </Box>
      </ThemeProvider>
      <AuthModal open={hanble} close={closeModal} />
    </>
  );
}

export default Layout;
