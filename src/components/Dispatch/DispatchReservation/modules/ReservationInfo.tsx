import React from 'react';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import ReservationItem from './ReservationItem';
import { Box } from '@mui/material';

const info = {
  stutes: '픽업',
  period: '2020. 02. 17 19:30 ',
  dispatchId: 'EV23314#PdispatchId',
  noticeId: 'EV23314#PnoticeId',
  storeId: 'EV23314#PstoreId',
  storeName: '주식회사 피엘지',
  dispatchName: '오전 오토바이 배달기사님 모집합니다.',
  storeArea: '서울특별시 강남구 테헤란로 104 190호',
  storelocation: '강남역 3번출구에서 10분 거리',
  deliveryArea: '서울특별시 강남구 테헤란로 504 190호',
  requestPeriod: '2020. 02. 17 19:30 / 2020. 02. 17 21:30',
};

const firstInfo = [{ option: '배차 상태', info: info.stutes }];

const secondInfo = [
  { option: '배차 생성일시', info: info.period },
  { option: '픽업/완료 요청 일시', info: info.requestPeriod },
  { option: '배차 아이디', info: info.dispatchId },
  { option: '배차 공고 아이디', info: info.noticeId },
  { option: '배차 상점 아이디', info: info.storeId },
  { option: '배차 상점 상호명', info: info.storeName },
  { option: '배차 명', info: info.dispatchName },
  { option: '상점 등록 주소', info: info.storeArea },
  { option: '상점 위치 소개', info: info.storelocation },
  { option: '목적지 주소', info: info.deliveryArea },
];

const ReservationInfo = (): JSX.Element => {
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
            return <ReservationItem key={index} option={x.option} data={x.info} />;
          })}
          <div>예약 배차 정보</div>
          {secondInfo.map((x, index) => {
            return <ReservationItem key={index} option={x.option} data={x.info} />;
          })}
        </Stack>
      </Grid>
    </Box>
  );
};

export default ReservationInfo;
