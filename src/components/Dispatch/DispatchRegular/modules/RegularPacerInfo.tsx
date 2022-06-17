import React from 'react';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import RegularItem from './RegularItem';
import { Box } from '@mui/material';

const info = {
  pacerId: 'pacer021',
  deliveryMeans: '오토바이',
  totalAmount: '3000원',
  baseAmount: '3000원',
  addAmount: '3000원',
  promotion: '0원',
};

const firstInfo = [
  { option: '배차 페이서 아이디', info: info.pacerId, on: true },
  { option: '배차 페이서 배달 수단', info: info.deliveryMeans, on: false },
  { option: '최종 배달 금액', info: info.totalAmount, on: false },
  { option: '페이서 기본 배달료', info: info.baseAmount, on: false },
  { option: '거리 / 거리 할증료', info: info.addAmount, on: false },
  { option: '상점 프로모션', info: info.promotion, on: false },
];

const RegularPacerInfo = (): JSX.Element => {
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
          {firstInfo.map((x, index) => {
            return <RegularItem key={index} option={x.option} data={x.info} on={x.on} />;
          })}
        </Stack>
      </Grid>
    </Box>
  );
};

export default RegularPacerInfo;
