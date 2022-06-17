import React from 'react';
import { Box, IconButton, Grid } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import AccumulationFilter from './modules/AccumulationFilter';
import { StoreDedutedType } from './type';
import mockStoreDeduted from '@mocks/mockStoreDeduted.json';

const StoreDeduted = (): JSX.Element => {
  // const data: StoreDedutedtype[] = useAppSelector((state) => state.user.userPacerList);
  const data: StoreDedutedType[] = mockStoreDeduted;
  // const dispatch = useAppDispatch();

  const columns: GridColDef[] = [
    {
      field: 'deductionDate',
      headerName: '차감/회수 일시',
      width: 150,
      editable: false,
      headerClassName: 'super-app-theme--header',
    },
    {
      field: 'storeId',
      headerName: '차감 상점 아이디',
      width: 150,
      editable: false,
    },
    {
      field: 'pacerId',
      headerName: '지금 페이서 아이디',
      width: 150,
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
      field: 'dispatchType',
      headerName: '배차 타입',
      width: 150,
      editable: false,
    },
    {
      field: 'deductionAmount',
      headerName: '차감/회수 금액',
      width: 220,
      editable: false,
    },
    {
      field: 'deductionReasons',
      headerName: '차감/회수 사유',
      width: 120,
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

export default StoreDeduted;
