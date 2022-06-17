import React from 'react';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import RegularItem from './RegularItem';
import { Box } from '@mui/material';

const RegularClient = () => {
  const info = {
    customerPhoneNumber: '034022313454',
    deliveryAddress: '서울 강남구 대치동',
    deliveryAddressNum: '941-1',
    deliveryAddressDetails: '4층 푸드테크',
    deliveryRoadAddress: '서울 강남구 삼성로 85길 26',
    deliveryXCoordinates: '23.45553',
    deliveryYCoordinates: '163.3235',
  };

  const firstInfo = [
    { option: '고객 전화번호', info: info.customerPhoneNumber, on: true },
    { option: '배달지 주소', info: info.deliveryAddress, on: false },
    { option: '배달지 번지', info: info.deliveryAddressNum, on: false },
    { option: '배달지 상세주소', info: info.deliveryAddressDetails, on: false },
    { option: '배달지 도로명 주소', info: info.deliveryRoadAddress, on: false },
    { option: '배달지 X좌표', info: info.deliveryXCoordinates, on: false },
    { option: '배달지 Y좌표', info: info.deliveryYCoordinates, on: false },
  ];
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

export default RegularClient;
