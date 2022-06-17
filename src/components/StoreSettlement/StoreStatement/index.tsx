import React from 'react';
import { Box } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import AccumulationFilter from './modules/AccumulationFilter';
import { StoreStatementType } from './type';
import mockStoreStatement from '@mocks/mockStoreStatement.json';

const StoreStatement = (): JSX.Element => {
  // const data: StoreStatementtype[] = useAppSelector((state) => state.user.userPacerList);
  const data: StoreStatementType[] = mockStoreStatement;
  // const dispatch = useAppDispatch();

  const columns: GridColDef[] = [
    {
      field: 'computerDate',
      headerName: '전산 연월',
      width: 150,
      editable: false,
      headerClassName: 'super-app-theme--header',
    },
    {
      field: 'issueDate',
      headerName: '발급 일시',
      width: 150,
      editable: false,
    },
    {
      field: 'storeId',
      headerName: '상점 아이디',
      width: 200,
      editable: false,
    },
    {
      field: 'regularAmount',
      headerName: '정규 정산 금액 / 건 수',
      width: 150,
      editable: false,
    },
    {
      field: 'emergencyAmount',
      headerName: '긴급 정산 금액 / 건 수',
      width: 150,
      editable: false,
    },
    {
      field: 'reservationAmount',
      headerName: '예약 정산 금액 / 건 수',
      width: 150,
      editable: false,
    },
    {
      field: 'issuedMeans',
      headerName: '발급 이메일 / 연락처',
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

export default StoreStatement;
