import React from 'react';
import { Button, Box, TextField, InputLabel, MenuItem, FormControl } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const UserPacerFilter = (): JSX.Element => {
  const [value, setValue] = React.useState<Date | null>(null);
  const [optional, setOptional] = React.useState('');
  const [marketing, setMarketing] = React.useState('');
  const [status, setStatus] = React.useState('');

  const optionalHandleChange = (event: SelectChangeEvent) => {
    setOptional(event.target.value as string);
  };
  const marketingHandleChange = (event: SelectChangeEvent) => {
    setMarketing(event.target.value as string);
  };
  const statusHandleChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value as string);
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
      <FormControl
        sx={{
          width: '180px',
        }}
      >
        <InputLabel id="optional-select-label">선택약관 동의 여부</InputLabel>
        <Select
          labelId="optional-select-label"
          id="optional-select"
          value={optional}
          label="Age"
          onChange={optionalHandleChange}
        >
          <MenuItem value={'consent'}>동의</MenuItem>
          <MenuItem value={'cisagree'}>비동의</MenuItem>
        </Select>
      </FormControl>
      <FormControl
        sx={{
          width: '180px',
        }}
      >
        <InputLabel id="marketing-select-label">마케팅 동의 여부</InputLabel>
        <Select
          labelId="marketing-select-label"
          id="marketing-select"
          value={marketing}
          label="Age"
          onChange={marketingHandleChange}
        >
          <MenuItem value={'consent'}>동의</MenuItem>
          <MenuItem value={'cisagree'}>비동의</MenuItem>
        </Select>
      </FormControl>
      <FormControl
        sx={{
          width: '180px',
        }}
      >
        <InputLabel id="status-select-label">계정상태</InputLabel>
        <Select
          labelId="status-select-label"
          id="status-select"
          value={status}
          label="Age"
          onChange={statusHandleChange}
        >
          <MenuItem value={'dormant'}>휴면</MenuItem>
          <MenuItem value={'active'}>활동</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default UserPacerFilter;
