import React from 'react';
import { Button, Box, TextField, InputLabel, MenuItem, FormControl } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { history } from '@store/index';

const InterlockedFilter = (): JSX.Element => {
  const [interlock, setInterlock] = React.useState('');
  const selectChange = (event: SelectChangeEvent) => {
    setInterlock(event.target.value as string);
  };

  const [pos, setpos] = React.useState('');
  const HandleChange = (event: SelectChangeEvent) => {
    setpos(event.target.value as string);
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
      <TextField label="검색" sx={{ width: 180 }} />
      <TextField
        id="startDate"
        label="등록 일(시작)"
        type="date"
        defaultValue={nowTime}
        sx={{ width: 180 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="endtDate"
        label="등록 일(종료)"
        type="date"
        defaultValue={nowTime}
        sx={{ width: 180 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <FormControl
        sx={{
          width: '150px',
        }}
      >
        <InputLabel id="pos-select-label">POS</InputLabel>
        <Select
          labelId="pos-select-label"
          id="pos-select"
          value={pos}
          onChange={HandleChange}
          defaultValue="all"
        >
          <MenuItem value={'foodTech'}>푸드테크</MenuItem>
          <MenuItem value={'all'}>전체</MenuItem>
        </Select>
      </FormControl>
      <FormControl
        sx={{
          width: '150px',
        }}
      >
        <InputLabel id="interlock-label">연동 상태</InputLabel>
        <Select
          labelId="interlock-label"
          id="interlock"
          value={interlock}
          label="Age"
          onChange={selectChange}
        >
          <MenuItem value={'consent'}>활성</MenuItem>
          <MenuItem value={'cisagree'}>비 활성</MenuItem>
        </Select>
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        sx={{ marginLeft: 'auto' }}
        onClick={() => {
          history.push('/interlock/edit');
        }}
      >
        등록하기
      </Button>
    </Box>
  );
};

export default InterlockedFilter;
