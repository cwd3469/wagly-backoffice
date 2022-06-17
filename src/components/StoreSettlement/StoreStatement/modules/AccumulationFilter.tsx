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
        label="정산 연 월"
        type="date"
        defaultValue={nowTime}
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </Box>
  );
};

export default AccumulationFilter;
