import React from 'react';
import { Button, Box, TextField, InputLabel, MenuItem, FormControl } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const AccumulationFilter = (): JSX.Element => {
  const [value, setValue] = React.useState<Date | null>(null);
  const [optional, setOptional] = React.useState('');
  const [type, setType] = React.useState('');
  const [accumulation, setAccumulation] = React.useState('');

  const accumulationHandleChange = (event: SelectChangeEvent) => {
    setAccumulation(event.target.value as string);
  };
  const typeHandleChange = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
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
        label="차감/회수 일(시작)"
        type="date"
        defaultValue={nowTime}
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="endtDate"
        label="차감/회수 일(종료)"
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
        <InputLabel id="type-select-label">배차 타입</InputLabel>
        <Select
          labelId="type-select-label"
          id="type-select"
          value={type}
          label="Age"
          onChange={typeHandleChange}
        >
          <MenuItem value={'consent'}>예약</MenuItem>
          <MenuItem value={'pickupWait'}>정규</MenuItem>
          <MenuItem value={'Delivering'}>긴급</MenuItem>
        </Select>
      </FormControl>
      <FormControl
        sx={{
          width: '180px',
        }}
      >
        <InputLabel id="accumulation-select-label">차감/회수 사유</InputLabel>
        <Select
          labelId="accumulation-select-label"
          id="accumulation-select"
          value={accumulation}
          label="Age"
          onChange={accumulationHandleChange}
        >
          <MenuItem value={'consent'}>배송 완료</MenuItem>
          <MenuItem value={'pickupWait'}>상점 회수 요청</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default AccumulationFilter;
