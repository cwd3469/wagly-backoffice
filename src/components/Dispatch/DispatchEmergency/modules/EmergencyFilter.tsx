import React from 'react';
import { Box, TextField, InputLabel, MenuItem, FormControl } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const EmergencyFilter = (): JSX.Element => {
  const [dispatch, setDispatch] = React.useState('');

  const HandleChange = (event: SelectChangeEvent) => {
    setDispatch(event.target.value as string);
  };

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
        label="배차생성일시(시작)"
        type="date"
        defaultValue={nowTime}
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="endtDate"
        label="배차생성일시(종료)"
        type="date"
        defaultValue={nowTime}
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <FormControl
        sx={{
          width: '180px',
        }}
      >
        <InputLabel id="dispatch-select-label">배차 상태</InputLabel>
        <Select
          labelId="dispatch-select-label"
          id="dispatch-select"
          value={dispatch}
          label="Age"
          onChange={HandleChange}
        >
          <MenuItem value={'consent'}>완료</MenuItem>
          <MenuItem value={'pickupWait'}>픽업 대기</MenuItem>
          <MenuItem value={'Delivering'}>배달 중</MenuItem>
          <MenuItem value={'cancellation'}>취소</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default EmergencyFilter;
