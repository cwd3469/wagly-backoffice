import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import UserPacerItem from './UserPacerItem';

const datas = {
  mileage: '300,000원',
  withdrawal: '0원',
  accountBank: '기업은행',
  accountNum: '12312323222222',
};

const mileageListData = [
  { option: '보유 마일리지', datas: datas.mileage },
  { option: '출금 대기 마일리지', datas: datas.withdrawal },
];
const accountListData = [
  { option: '출금 계좌 은행', datas: datas.accountBank },
  { option: '계좌번호', datas: datas.accountNum },
];

const UserPacerSubmileage = (): JSX.Element => {
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
        <div>마일리지 정보</div>
        {mileageListData.map((x, index) => {
          return <UserPacerItem key={index} option={x.option} data={x.datas} />;
        })}
      </Stack>
      <Stack spacing={1} sx={{ width: '100%' }}>
        <div>출금 계좌 정보</div>
        {accountListData.map((x, index) => {
          return <UserPacerItem key={index} option={x.option} data={x.datas} />;
        })}
      </Stack>
    </Grid>
  );
};

export default UserPacerSubmileage;
