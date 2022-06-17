import React from 'react';
import { Box, TextField, Switch, Grid, Typography } from '@mui/material';

const UserDormantFilter = (): JSX.Element => {
  function leftPad(value: number) {
    if (value >= 10) {
      return value;
    }
    return `0${value}`;
  }
  function toStringByFormatting(source: Date, delimiter = '-') {
    const year = source.getFullYear();
    const month = leftPad(source.getMonth() + 1);
    const day = leftPad(source.getDate());
    return [year, month, day].join(delimiter);
  }
  const nowTime = toStringByFormatting(new Date());

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{
        paddingBottom: '10px',
        display: 'flex',
        justifyContent: 'start',
        gap: '10px',
      }}
    >
      <TextField label="검색" />
      <TextField
        id="startDate"
        label="날짜선택(시작일)"
        type="date"
        defaultValue={nowTime}
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="endtDate"
        label="날짜선택(종료일)"
        type="date"
        defaultValue={nowTime}
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        width={180}
      >
        <Typography variant="subtitle2" component="div">
          잔여 마일리지 여부
        </Typography>
        <Switch defaultChecked />
      </Grid>
    </Box>
  );
};

export default UserDormantFilter;
