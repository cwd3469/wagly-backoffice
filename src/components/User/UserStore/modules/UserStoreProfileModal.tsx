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
  { field: 'contract', headerName: '계약일', width: 160 },
  { field: 'cancellation', headerName: '해지일', width: 160 },
  {
    field: 'contractId',
    headerName: '계약 아이디',
    width: 150,
    renderCell: (params) => (
      <>
        {params.value}
        <IconButton
          onClick={() => {
            console.log(params);
          }}
        >
          <ContentCopyIcon fontSize="small" />
        </IconButton>
      </>
    ),
  },
  {
    field: 'storeId',
    headerName: '페이서 아이디',
    width: 130,
  },
  {
    field: 'groupNum',
    headerName: '속한 그룹 수',
    width: 130,
  },
  {
    field: 'dispatchNum',
    headerName: '정규 배차 수행 건수',
    width: 130,
  },
  {
    field: 'state',
    headerName: '상태',
    width: 130,
  },
  {
    field: 'shortcut',
    headerName: '공고 바로가기 ',
    width: 130,
    renderCell: (params) => (
      <>
        <Button>바로가기</Button>
      </>
    ),
  },
];

const data: object[] = [
  {
    id: 1,
    contract: '2022.02.17 15:40',
    cancellation: '2022.02.17 15:40',
    contractId: 'hom_2315s23s',
    storeId: 'm_2315s23',
    storeName: 'hohoSikdang',
    dispatchNum: 570,
    groupNum: 570,
    state: '해지',
  },
  {
    id: 2,
    contract: '2022.02.17 15:40',
    cancellation: '2022.02.17 15:40',
    contractId: 'hom_2315s23s',
    storeId: 'hom_23s23',
    storeName: 'hohoSikdang',
    dispatchNum: 570,
    groupNum: 5,
    state: '계약 중',
  },
  {
    id: 3,
    contract: '2022.02.17 15:40',
    cancellation: '2022.02.17 15:40',
    contractId: 'hom_2315s23s',
    storeId: 'ho_2315s23',
    storeName: 'hohoSikdang',
    dispatchNum: 570,
    groupNum: 70,
    state: '계약 중',
  },
  {
    id: 4,
    contract: '2022.02.17 15:40',
    cancellation: '2022.02.17 15:40',
    contractId: 'hom_2315s23s',
    storeId: 'hom_23s23',
    storeName: 'hohoSikdang',
    dispatchNum: 570,
    groupNum: 50,
    state: '계약 중',
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

const UserPacerProfileModal = (props: ModalProps) => {
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

UserPacerProfileModal.defaultProps = {
  open: false,
  handleClose: () => {},
  width: 930,
  height: 600,
};

export default UserPacerProfileModal;
