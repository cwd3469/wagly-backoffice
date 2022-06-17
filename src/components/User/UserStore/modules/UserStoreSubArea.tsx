import React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const UserPacerSubArea = (): JSX.Element => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        width: '100%',
        height: '555px',
        marginTop: '10px',
      }}
    >
      <Box
        sx={{
          width: 300,
          height: 400,
          backgroundColor: '#4aa8d8',
        }}
      />
      <div>3M가 이하의 JPG 또는 PNG 파일을 올려주세요.</div>
      <Grid
        justifyContent="center"
        container
        sx={{
          width: 300,
          gap: 1,
        }}
      >
        <Button variant="contained">등록 / 수정</Button>
        <Button variant="contained">다운로드</Button>
      </Grid>
    </Grid>
  );
};

export default UserPacerSubArea;
