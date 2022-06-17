import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import UserPacerItem from './UserPacerItem';

const datas = {
  profileId: 'gogofiveTwins',
  charge: '5000원',
  premium: '100원',
  means: '도보',
  timeWeekin: '11:00 ~ 14:00',
  timeWeekEnd: '11:00 ~ 14:00',
  intro:
    '안녕하세요! 홍길동 페이 서입니다. 안녕하세요! 홍길동 페이서입니다. 안녕하세요! 홍길동 페이 서입니다. 안녕하세요! 홍길동 페이 서입니다. 안녕하세요! 홍길동 페이 서입니다. 안녕하세요! 홍길동 페이서입니다.',
};

const ListData = [
  { option: '프로필 아이디', data: datas.profileId },
  { option: '설정 기본 배달료 ', datas: datas.charge },
  { option: '설정 1km 초과 100m 당 할증료', datas: datas.premium },
  { option: '배달 수단 ', datas: datas.means },
  { option: '주중 배달 가능 시간', datas: datas.timeWeekin },
  { option: '주말 배달 가능 시간', datas: datas.timeWeekEnd },
  { option: '자기 소개', datas: datas.intro },
];

const UserPacerSubArea = (): JSX.Element => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="space-between"
      alignItems="flex-start"
      sx={{
        width: '100%',
        height: '555px',
        gap: 1,
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

export default UserPacerSubArea;
