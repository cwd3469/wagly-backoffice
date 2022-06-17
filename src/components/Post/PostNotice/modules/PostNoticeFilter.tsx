import React from 'react';
import { Button, Box, TextField, InputLabel, MenuItem, FormControl } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const PostNoticeFilter = (): JSX.Element => {
  const [select, setSelect] = React.useState('');
  const selectChange = (event: SelectChangeEvent) => {
    setSelect(event.target.value as string);
  };

  const [optional, setOptional] = React.useState('');
  const exposureHandleChange = (event: SelectChangeEvent) => {
    setOptional(event.target.value as string);
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
        label="등록 일(시작)"
        type="date"
        defaultValue={nowTime}
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="endtDate"
        label="등록 일(종료)"
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
        <InputLabel id="optional-select-label">페이서/상점</InputLabel>
        <Select
          labelId="optional-select-label"
          id="optional-select"
          value={optional}
          label="Age"
          onChange={exposureHandleChange}
        >
          <MenuItem value={'consent'}>페이서</MenuItem>
          <MenuItem value={'cisagree'}>상점</MenuItem>
        </Select>
      </FormControl>
      <FormControl
        sx={{
          width: '180px',
        }}
      >
        <InputLabel id="select-label">노출여부</InputLabel>
        <Select
          labelId="select-label"
          id="select"
          value={select}
          label="Age"
          onChange={selectChange}
        >
          <MenuItem value={'consent'}>공개</MenuItem>
          <MenuItem value={'cisagree'}>비공개</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" color="primary" sx={{ marginLeft: 'auto' }}>
        등록하기
      </Button>
    </Box>
  );
};

export default PostNoticeFilter;
