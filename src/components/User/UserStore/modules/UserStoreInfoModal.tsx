import * as React from 'react';
import Pmodal from '@components/Common/Pmodal';
import { ModalProps } from '../type';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Grid, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const form: GridColDef[] = [
  { field: 'contract', headerName: '등록일', width: 160 },
  { field: 'staffId', headerName: '직원 아이디', width: 160 },
  {
    field: 'staffName',
    headerName: '직원 이름 ',
    width: 150,
  },
  {
    field: 'staffIdPhoneNum',
    headerName: '직원 연락처',
    width: 130,
  },
  {
    field: 'staffState',
    headerName: '직원 상태',
    width: 130,
  },
  {
    field: 'lastDate',
    headerName: '마지막 접속일',
    width: 130,
  },
];

const data: object[] = [
  {
    id: 1,
    contract: '2021.03.2',
    staffId: 'go_flon2sa',
    staffName: '홍길동',
    staffIdPhoneNum: '010-330-2226',
    staffState: '출근중',
    lastDate: '2022.03.12',
  },
  {
    id: 2,
    contract: '2021.03.2',
    staffId: 'go_fn2sa',
    staffName: '홍길동',
    staffIdPhoneNum: '010-330-2226',
    staffState: '출근중',
    lastDate: '2022.03.12',
  },
  {
    id: 3,
    contract: '2021.03.2',
    staffId: 'go_fn2sa',
    staffName: '홍길동',
    staffIdPhoneNum: '010-330-2226',
    staffState: '출근중',
    lastDate: '2022.03.12',
  },
  {
    id: 4,
    contract: '2021.03.2',
    staffId: 'go_fn2sa',
    staffName: '홍길동',
    staffIdPhoneNum: '010-330-2226',
    staffState: '출근중',
    lastDate: '2022.03.12',
  },
  {
    id: 5,
    contract: '2021.03.2',
    staffId: 'go_fn2sa',
    staffName: '홍길동',
    staffIdPhoneNum: '010-330-2226',
    staffState: '퇴사',
    lastDate: '2022.03.12',
  },
  {
    id: 6,
    contract: '2021.03.2',
    staffId: 'go_fn2sa',
    staffName: '홍길동',
    staffIdPhoneNum: '010-330-2226',
    staffState: '퇴사',
    lastDate: '2022.03.12',
  },
  {
    id: 7,
    contract: '2021.03.2',
    staffId: 'go_fn2sa',
    staffName: '홍길동',
    staffIdPhoneNum: '010-330-2226',
    staffState: '출근중',
    lastDate: '2022.03.12',
  },
  {
    id: 8,
    contract: '2021.03.2',
    staffId: 'go_fn2sa',
    staffName: '홍길동',
    staffIdPhoneNum: '010-330-2226',
    staffState: '출근중',
    lastDate: '2022.03.12',
  },
  {
    id: 9,
    contract: '2021.03.2',
    staffId: 'go_fn2sa',
    staffName: '홍길동',
    staffIdPhoneNum: '010-330-2226',
    staffState: '출근중',
    lastDate: '2022.03.12',
  },
];

// 모달 필터
const ActiveSelectfilter = (props: { handleClose: () => void }) => {
  const [active, setActive] = React.useState('active');
  const { handleClose } = props;
  const handleChange = (event: SelectChangeEvent) => {
    setActive(event.target.value as string);
  };

  return (
    <Grid container direction="row" justifyContent="space-between" alignItems="center">
      <Box sx={{ minWidth: 150 }}>
        <FormControl fullWidth>
          <Select
            labelId="active-select-label"
            id="active-select"
            size="small"
            value={active}
            onChange={handleChange}
            defaultValue={active}
          >
            <MenuItem value={'active'}>활성</MenuItem>
            <MenuItem value={'unActive'}>비활성</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <IconButton aria-label="delete" onClick={handleClose}>
        <CloseIcon />
      </IconButton>
    </Grid>
  );
};

const UserStoreInfoModal = (props: ModalProps) => {
  const { open, handleClose, width, height, ID } = props;
  return (
    <Pmodal open={open} handleClose={handleClose}>
      <div
        style={{ width: width, height: height, display: 'flex', flexDirection: 'column', gap: 10 }}
      >
        <ActiveSelectfilter handleClose={handleClose} />
        <DataGrid
          rows={data}
          columns={form}
          pageSize={5}
          rowsPerPageOptions={[15]}
          disableSelectionOnClick
          onCellDoubleClick={(params, event) => {
            if (!event.ctrlKey) {
              console.log(event.target);
              console.log(params);
            }
          }}
        />
      </div>
    </Pmodal>
  );
};

UserStoreInfoModal.defaultProps = {
  open: false,
  handleClose: () => {},
  width: 930,
  height: 600,
};

export default UserStoreInfoModal;
