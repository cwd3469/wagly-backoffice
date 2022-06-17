import React from 'react';
import { Box, IconButton, Grid, Button } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import InterlockedFilter from './modules/InterlockedFilter';
import { InterlockedType } from './type';
import mockInterlocked from '@mocks/mockInterlocked.json';
import { history } from '@store/index';

const Interlocked = (): JSX.Element => {
  // const data: SecurityUserStatustype[] = useAppSelector((state) => state.user.userPacerList);
  const data: InterlockedType[] = mockInterlocked;
  // const dispatch = useAppDispatch();

  const columns: GridColDef[] = [
    {
      field: 'registrationDate',
      headerName: '등록일',
      width: 150,
      editable: false,
      headerClassName: 'super-app-theme--header',
    },
    {
      field: 'pos',
      headerName: 'POS',
      width: 150,
      editable: false,
    },
    {
      field: 'posStoreCode',
      headerName: 'POS 매장 코드',
      width: 220,
      editable: false,
      renderCell: (params) => (
        <Grid container direction="row" justifyContent="space-between" alignItems="center">
          {params.value}
          <IconButton>
            <ContentCopyIcon fontSize="small" />
          </IconButton>
        </Grid>
      ),
    },
    {
      field: 'inInterworkingId',
      headerName: '내부 연동 ID',
      width: 220,
      editable: false,
      renderCell: (params) => (
        <Grid container direction="row" justifyContent="space-between" alignItems="center">
          {params.value}
          <IconButton>
            <ContentCopyIcon fontSize="small" />
          </IconButton>
        </Grid>
      ),
    },
    {
      field: 'interworkingPacingStoreId',
      headerName: '연동 페이싱 상점 ID',
      width: 220,
      editable: false,
      renderCell: (params) => (
        <Grid container direction="row" justifyContent="space-between" alignItems="center">
          {params.value}
          <IconButton>
            <ContentCopyIcon fontSize="small" />
          </IconButton>
        </Grid>
      ),
    },
    {
      field: 'companyName',
      headerName: '기업명',
      width: 220,
      editable: false,
    },
    {
      field: 'storeName',
      headerName: '매장명',
      width: 220,
      editable: false,
    },
    {
      field: 'businessRegistrationNumber',
      headerName: '사업자등록번호',
      width: 220,
      editable: false,
      renderCell: (params) => (
        <Grid container direction="row" justifyContent="space-between" alignItems="center">
          {params.value}
          <IconButton>
            <ContentCopyIcon fontSize="small" />
          </IconButton>
        </Grid>
      ),
    },
    {
      field: 'interworkingStatus',
      headerName: '연동 상태',
      width: 180,
      editable: false,
    },
    {
      field: 'detailView',
      headerName: '상세보기',
      width: 150,
      editable: false,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={() => {
            const id = params.row.id;
            history.push(`/interlock/edit/?id=${id}&state=fix`);
          }}
        >
          보기
        </Button>
      ),
    },
  ];

  const rows = data;

  return (
    <Box
      sx={{
        backgroundColor: '#FFF',
        padding: '10px',
      }}
    >
      <InterlockedFilter />
      <div style={{ height: 800, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={15}
          rowsPerPageOptions={[15]}
          disableSelectionOnClick
        />
      </div>
    </Box>
  );
};

export default Interlocked;
