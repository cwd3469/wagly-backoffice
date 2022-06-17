import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import UserPacerItem from './UserStoreItem';

const datas = {
  businessHours: '3 ~ 16시',
  delivery: '4km',
  numberDelivery: '100',
  amenities: '화장실 , 식수제공 , 휴게실',
  location: '강남역 3번 출구 ',
};

const mileageListData = [
  { option: '영업 시간', datas: datas.businessHours },
  { option: '배달 변경', datas: datas.delivery },
  { option: '1일 평균 배달 요청 수', datas: datas.numberDelivery },
  { option: '제공 편의 시설', datas: datas.amenities },
  { option: '상점 위치 소개', datas: datas.location },
];

const UserPacerSubAddInfo = (): JSX.Element => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="flex-start"
      sx={{
        width: '100%',
        gap: '30px',
      }}
    >
      <Stack spacing={1} sx={{ width: '100%' }}>
        <div>추가 정보</div>
        {mileageListData.map((x, index) => {
          return <UserPacerItem key={index} option={x.option} data={x.datas} />;
        })}
      </Stack>
      <Button variant="contained">정보 수정</Button>
    </Grid>
  );
};

export default UserPacerSubAddInfo;
