import React from 'react';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import RegularItem from './RegularItem';
import { Box } from '@mui/material';

const info = {
  foodOrderNumber: '2ed1g1v235d',
  orderPickupNumber: 3303,
  orderAmount: '20,000',
  paymentType: '선결제',
  customerMemo: '조심히 오세요',
  storeMemo: '-',
  pickUpTime: '2020.01.02. 17:00',
  pickUpRequestTime: '20분',
  deliveryDistance: '1,330m',
};

const RegularInfo = (): JSX.Element => {
  const firstInfo = [
    { option: '푸드테크 주문번호', info: info.orderPickupNumber, on: true },
    { option: '주문 픽업번호', info: info.orderAmount, on: false },
    { option: '주문 금액(고객결제금액)', info: info.paymentType, on: false },
    { option: '결제 유형', info: info.customerMemo, on: false },
    { option: '매장 메모', info: info.storeMemo, on: false },
    { option: '픽업 요청 시간', info: info.pickUpTime, on: false },
    { option: '픽업 요청 시간분', info: info.deliveryDistance, on: false },
    { option: '배달거리(M)', info: info.deliveryDistance, on: false },
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

export default RegularInfo;
