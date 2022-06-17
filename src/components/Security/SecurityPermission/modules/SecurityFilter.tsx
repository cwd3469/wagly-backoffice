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

      <Button
        variant="contained"
        color="primary"
        sx={{ marginLeft: 'auto' }}
        onClick={() => {
          history.push('/security/permission/edit');
        }}
      >
        등록하기
      </Button>
    </Box>
  );
};

export default SecurityFilter;
