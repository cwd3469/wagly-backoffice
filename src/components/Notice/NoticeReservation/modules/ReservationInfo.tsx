import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import ReservationItem from './ReservationItem';
import { Box } from '@mui/material';

const datas = {
  employmentId: 'gogofiveTwins',
  storeId: 'gogohome',
  tradeName: '주식회사 호호당',
  period: '2020. 02. 17 19:30 / 2020. 02. 17 20:30',
  noticeName: '오전 오토바이 배달기사님 모집합니다.',
  deliveryMethod: '오토바이 , 자동차',
  deliveryTime: '10:00 ~ 14:00',
  noticeIntro:
    '배달음식 빵이라서 가볍고 상품 포장 잘해드려요 , 가능하면 오토바이 기사님이었으면 좋겠습니다.',
};

const ListData = [
  { option: '긴급 공고 아이디', datas: datas.employmentId },
  { option: '공고 상점 아이디', datas: datas.storeId },
  { option: '공고 상점 상호명', datas: datas.tradeName },
  { option: '공고 게시일 / 마감일', datas: datas.period },
];

const mileageData = [
  { option: '공고명', datas: datas.noticeName },
  { option: '선호 배달 수단', datas: datas.deliveryMethod },
];

const EmploymentInfo = (): JSX.Element => {
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
          {ListData.map((x, index) => {
            return <ReservationItem key={index} option={x.option} data={x.datas} />;
          })}
          <div>긴급 공고 내용</div>
          {mileageData.map((x, index) => {
            return <ReservationItem key={index} option={x.option} data={x.datas} />;
          })}
        </Stack>
        <Button variant="contained">정보 수정</Button>
      </Grid>
    </Box>
  );
};

export default EmploymentInfo;
