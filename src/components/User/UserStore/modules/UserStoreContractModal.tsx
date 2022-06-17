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
import { Button } from '@mui/material';

const form: GridColDef[] = [
  { field: 'startDate', headerName: '공고 시작일', width: 160 },
  { field: 'endDate', headerName: '공고 종료일', width: 160 },
  {
    field: 'notionId',
    headerName: '공고 아이디',
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
    field: 'notionTitle',
    headerName: '공고 제목',
    width: 130,
  },
  {
    field: 'notionApplicantsNum',
    headerName: '공고 지원자 수',
    width: 200,
  },
  {
    field: 'accept',
    headerName: '수락',
    width: 130,
  },
  {
    field: 'refusal',
    headerName: '거절',
    width: 130,
  },
  {
    field: 'state',
    headerName: '공고 상태 ',
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
    startDate: '2020.12.30',
    endDate: '2030.1.2',
    notionId: 'gp_ssd112',
    notionTitle: '모여라 배달',
    notionApplicantsNum: '3000명',
    accept: '5명',
    refusal: '300명',
    state: '모집 중',
  },
  {
    id: 2,
    startDate: '2020.12.30',
    endDate: '2030.1.2',
    notionId: 'gp_ssd112',
    notionTitle: '모여라 배달',
    notionApplicantsNum: '3000명',
    accept: '5명',
    refusal: '300명',
    state: '모집 중',
  },
  {
    id: 3,
    startDate: '2020.12.30',
    endDate: '2030.1.2',
    notionId: 'gp_ssd112',
    notionTitle: '모여라 배달',
    notionApplicantsNum: '3000명',
    accept: '5명',
    refusal: '300명',
    state: '모집 중',
  },
  {
    id: 4,
    startDate: '2020.12.30',
    endDate: '2030.1.2',
    notionId: 'gp_ssd112',
    notionTitle: '모여라 배달',
    notionApplicantsNum: '3000명',
    accept: '5명',
    refusal: '300명',
    state: '모집 중',
  },
  {
    id: 5,
    startDate: '2020.12.30',
    endDate: '2030.1.2',
    notionId: 'gp_ssd112',
    notionTitle: '모여라 배달',
    notionApplicantsNum: '3000명',
    accept: '5명',
    refusal: '300명',
    state: '모집 중',
  },
  {
    id: 6,
    startDate: '2020.12.30',
    endDate: '2030.1.2',
    notionId: 'gp_ssd112',
    notionTitle: '모여라 배달',
    notionApplicantsNum: '3000명',
    accept: '5명',
    refusal: '300명',
    state: '모집 중',
  },
  {
    id: 7,
    startDate: '2020.12.30',
    endDate: '2030.1.2',
    notionId: 'gp_ssd112',
    notionTitle: '모여라 배달',
    notionApplicantsNum: '3000명',
    accept: '5명',
    refusal: '300명',
    state: '모집 중',
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
