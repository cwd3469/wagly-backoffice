import React from 'react';
import { Box, IconButton, Grid } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import AccumulationFilter from './modules/AccumulationFilter';
import { PacerAccumulationType } from './type';
import mockPacerAccumulation from '@mocks/mockPacerAccumulation.json';

const PacerAccumulation = (): JSX.Element => {
  // const data: PacerAccumulationtype[] = useAppSelector((state) => state.user.userPacerList);
  const data: PacerAccumulationType[] = mockPacerAccumulation;
  // const dispatch = useAppDispatch();

  const columns: GridColDef[] = [
    {
      field: 'distributionType',
      headerName: '배차 타입',
      width: 150,
      editable: false,
      headerClassName: 'super-app-theme--header',
    },
    {
      field: 'accrualDate',
      headerName: '적립 일시',
      width: 150,
      editable: false,
    },
    {
      field: 'confirmationDate',
      headerName: '확정 일시(예정)',
      width: 150,
      editable: false,
    },
    {
      field: 'accruedAmount',
      headerName: '적립 금액',
      width: 150,
      editable: false,
    },
    {
      field: 'area',
      headerName: '지역',
      width: 150,
      editable: false,
    },
    {
      field: 'pacerId',
      headerName: '페이서 아이디',
      width: 220,
      editable: false,
    },
    {
      field: 'profileId',
      headerName: '프로필 아이디',
      width: 220,
      editable: false,
    },
    {
      field: 'shopId',
      headerName: '상점 아이디',
      width: 220,
      editable: false,
    },
    {
      field: 'dispatchId',
      headerName: '배차 아이디',
      width: 300,
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
      field: 'accrualStatus',
      headerName: '적립 상태',
      width: 150,
      editable: false,
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
      <AccumulationFilter />
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

export default PacerAccumulation;
