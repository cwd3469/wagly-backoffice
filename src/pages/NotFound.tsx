import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link to="/">Your Website</Link> {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          404 ERROR
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {'여기는 없는 페이지입니다. '}
          {'이전 페이지로 돌아가세요'}
        </Typography>
        <Typography variant="body1">
          <Link to="/">홈으로 돌아가기</Link>
        </Typography>
      </Container>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">기존 페이지로</Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}
