import React from 'react';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import EmergencyItem from './EmergencyItem';
import { Box } from '@mui/material';

const info = {
  pacerId: 'pacer021',
  pacerProfileId: 'pacerPro',
  deliveryMeans: '오토바이',
  amount: '3000원',
  intro:
    '안녕하세요! 홍길동 페이 서입니다. 안녕하세요! 홍길동 페이서입니다. 안녕하세요! 홍길동 페이 서입니다. 안녕하세요! 홍길동 페이 서입니다. 안녕하세요! 홍길동 페이 서입니다. 안녕하세요! 홍길동 페이서입니다.',
};

const firstInfo = [
  { option: '페이서 아이디', info: info.pacerId },
  { option: '페이서 프로필 아이디', info: info.pacerProfileId },
  { option: '배달 수단', info: info.deliveryMeans },
  { option: '배달 제안 금액', info: info.amount },
  { option: '지원 자기 소개', info: info.intro },
];

const EmergencyPacerInfo = (): JSX.Element => {
  return (
    <Box
      sx={{
        overflowY: 'scroll',
        height: 600,
      }}
    >
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
        sx={{
          width: '100%',
          gap: 1,
        }}
      >
        <Stack spacing={1} sx={{ width: '100%' }}>
          <div>배차 페이서 정보</div>
          {firstInfo.map((x, index) => {
            return <EmergencyItem key={index} option={x.option} data={x.info} />;
          })}
        </Stack>
      </Grid>
    </Box>
  );
};

export default EmergencyPacerInfo;
