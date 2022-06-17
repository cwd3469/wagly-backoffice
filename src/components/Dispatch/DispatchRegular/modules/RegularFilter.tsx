import React from 'react';
import { Button, Box, TextField, InputLabel, MenuItem, FormControl } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const RegularFilter = (): JSX.Element => {
  const [value, setValue] = React.useState<Date | null>(null);
  const [optional, setOptional] = React.useState('');
  const [marketing, setMarketing] = React.useState('');

  const exposureHandleChange = (event: SelectChangeEvent) => {
    setOptional(event.target.value as string);
  };
  const noticeStatusHandleChange = (event: SelectChangeEvent) => {
    setMarketing(event.target.value as string);
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
        <InputLabel id="marketing-select-label">배차 상태</InputLabel>
        <Select
          labelId="marketing-select-label"
          id="marketing-select"
          value={marketing}
          label="Age"
          onChange={noticeStatusHandleChange}
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

export default RegularFilter;
