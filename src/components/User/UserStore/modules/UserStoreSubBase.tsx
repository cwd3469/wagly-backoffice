import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import UserStoreItem from './UserStoreItem';

const datas = {
  userId: 'gogofiveTwins',
  tradeName: 'PLG',
  representative: '홍길순',
  busiessNum: '11356-4332245',
  phoneNum: '010-4433-6223',
  accountCreateDate: '2020. 02. 17 19:30',
  lastDate: '2020. 02. 17 19:30',
  mileage: '233258885p',
};

const ListData = [
  { option: '아이디', datas: datas.userId },
  { option: '상호명', datas: datas.tradeName },
  { option: '대표자', datas: datas.representative },
  { option: '사업자등록증', datas: datas.busiessNum },
  { option: '연락처', datas: datas.phoneNum },
  { option: '계정 생성 일시', datas: datas.accountCreateDate },
  { option: '마지막 로그인', datas: datas.lastDate },
];

const mileageData = { option: '보유 마일리지', datas: datas.mileage };

const UserPacerSubBase = (): JSX.Element => {
  return (
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
          return <UserStoreItem key={index} option={x.option} data={x.datas} />;
        })}
        <div>마일리지</div>
        <UserStoreItem option={mileageData.option} data={mileageData.datas} />
      </Stack>
      <Button variant="contained">정보 수정</Button>
    </Grid>
  );
};

export default UserPacerSubBase;
