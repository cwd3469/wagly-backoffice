import * as React from 'react';
import Pmodal from '@components/Common/Pmodal';
import { ModalProps } from '../type';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Grid } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const form: GridColDef[] = [
  { field: 'application', headerName: '지원날짜', width: 160 },
  {
    field: 'support',
    headerName: '지원 아이디',
    width: 160,
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
    headerName: '상점 아이디',
    width: 200,
  },
  {
    field: 'storeName',
    headerName: '상점 상호명',
    width: 200,
  },
  {
    field: 'state',
    headerName: '상태',
    width: 130,
  },
];

const data: object[] = [
  {
    id: 1,
    application: '2022.02.17 15:40',
    support: 'hom_2315s23s',
    storeId: 'hom_2315s23',
    storeName: 'hohoSikdang',
    state: '구독중',
  },

  {
    id: 2,
    application: '2022.02.17 15:40',
    support: 'hom_2315s23s',
    storeId: 'hom_2315s23',
    storeName: 'hohoSikdang2',
    state: '구독중',
  },
  {
    id: 3,
    application: '2022.02.17 15:40',
    support: 'hom_2315s23s',
    storeId: `hom_2315s23`,
    storeName: 'hohoSikdang3',
    state: '구독중',
  },
  {
    id: 4,
    application: '2022.02.17 15:40',
    support: 'hom_2315s23s',
    storeId: 'hom_2315s23',
    storeName: 'hohoSikdang4',
    state: '구독중',
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

const UserPacerContractModal = (props: ModalProps) => {
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

UserPacerContractModal.defaultProps = {
  open: false,
  handleClose: () => {},
  width: 930,
  height: 600,
};

export default UserPacerContractModal;
