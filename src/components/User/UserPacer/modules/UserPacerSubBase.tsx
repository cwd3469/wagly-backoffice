import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import UserPacerItem from './UserPacerItem';
import { useAppDispatch } from '@store/hooks';

const datas = {
  id: 'gogofiveTwins',
  name: '홍길순',
  phoneNum: '010-4433-6223',
  startDate: '2020. 02. 17 15:30',
  lastDate: '2020. 02. 17 19:30',
};

const ListData = [
  { option: '아이디', datas: datas.id },
  { option: '이름', datas: datas.name },
  { option: '연락처', datas: datas.phoneNum },
  { option: '계장 생성일시', datas: datas.startDate },
  { option: '마지막 로그인', datas: datas.lastDate },
];

const UserPacerSubBase = (): JSX.Element => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="flex-start"
      sx={{
        width: '100%',
        gap: 12,
      }}
    >
      <Stack spacing={1} sx={{ width: '100%' }}>
        {ListData.map((x, index) => {
          return <UserPacerItem key={index} option={x.option} data={x.datas} />;
        })}
      </Stack>
      <Button variant="contained">정보 수정</Button>
    </Grid>
  );
};

export default UserPacerSubBase;
