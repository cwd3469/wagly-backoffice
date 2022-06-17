import React from 'react';
import { Button, Box, TextField, InputLabel, MenuItem, FormControl } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { history } from '@store/index';

const SecurityFilter = (): JSX.Element => {
  const [select, setSelect] = React.useState('');
  const selectChange = (event: SelectChangeEvent) => {
    setSelect(event.target.value as string);
  };

  const [optional, setOptional] = React.useState('');
  const exposureHandleChange = (event: SelectChangeEvent) => {
    setOptional(event.target.value as string);
  };

  const [openEdit, setOpenEdit] = React.useState<boolean>(false);
  const handleOpenEdit = () => {
    setOpenEdit(!openEdit);
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
        label="생성/삭제일(시작)"
        type="date"
        defaultValue={nowTime}
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="endtDate"
        label="생성/삭제일(종료)"
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
        <InputLabel id="optional-select-label">권한 그룹</InputLabel>
        <Select
          labelId="optional-select-label"
          id="optional-select"
          value={optional}
          label="Age"
          onChange={exposureHandleChange}
        >
          <MenuItem value={'consent'}>master</MenuItem>
          <MenuItem value={'cisagree'}>cs</MenuItem>
          <MenuItem value={'cisagree'}>admin</MenuItem>
        </Select>
      </FormControl>
      <FormControl
        sx={{
          width: '180px',
        }}
      >
        <InputLabel id="select-label">구분</InputLabel>
        <Select
          labelId="select-label"
          id="select"
          value={select}
          label="Age"
          onChange={selectChange}
        >
          <MenuItem value={'delete'}>삭제</MenuItem>
          <MenuItem value={'create'}>생산</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SecurityFilter;
