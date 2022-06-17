import React from 'react';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import RegularItem from './RegularItem';
import { Box } from '@mui/material';

const info = {
  storeNumber: 'FOOD-TECH-1001',
  storeAddress: '-',
  storeAddressNum: '-',
  storeDetailAddress: '-',
  Xcoordinates: '-',
  Ycoordinates: '-',
};

const firstInfo = [
  { option: '푸드 테크 매장번호', info: info.storeNumber, on: true },
  { option: '매장주소', info: info.storeAddress, on: false },
  { option: '매장 번지', info: info.storeAddressNum, on: false },
  { option: '매장 상세주소', info: info.storeDetailAddress, on: false },
  { option: '매장 X좌표', info: info.Xcoordinates, on: false },
  { option: '매장 Y좌표', info: info.Ycoordinates, on: false },
];

const RegularStoreInfo = (): JSX.Element => {
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

export default RegularStoreInfo;
