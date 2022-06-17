import React from 'react';
import { Button, Box, TextField, InputLabel, MenuItem, FormControl } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const UserPacerFilter = (): JSX.Element => {
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
        <InputLabel id="marketing-select-label">공고 상태</InputLabel>
        <Select
          labelId="marketing-select-label"
          id="marketing-select"
          value={marketing}
          label="Age"
          onChange={noticeStatusHandleChange}
        >
          <MenuItem value={'consent'}>게시 중</MenuItem>
          <MenuItem value={'cisagree'}>마감</MenuItem>
        </Select>
      </FormControl>
      <FormControl
        sx={{
          width: '180px',
        }}
      >
        <InputLabel id="optional-select-label">노출여부</InputLabel>
        <Select
          labelId="optional-select-label"
          id="optional-select"
          value={optional}
          label="Age"
          onChange={exposureHandleChange}
        >
          <MenuItem value={'consent'}>제한</MenuItem>
          <MenuItem value={'cisagree'}>정상</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default UserPacerFilter;
