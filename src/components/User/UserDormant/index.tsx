import React from 'react';
import { Box } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import UserDormantFilter from './modules/UserDormantFilter';
import { UserDormanttype } from './type';
import mockUserDormant from '@mocks/mockUserDormant.json';

const UserDormant = (): JSX.Element => {
  const data: UserDormanttype[] = mockUserDormant;
  const columns: GridColDef[] = [
    {
      field: 'date',
      headerName: ' 휴면 적용일',
      width: 230,
      editable: false,
      headerClassName: 'super-app-theme--header',
    },

    {
      field: 'users',
      headerName: '사용자 구분',
      width: 230,
      editable: false,
    },
    {
      field: 'userId',
      headerName: 'ID',
      width: 230,
      editable: false,
    },
    {
      field: 'mileage',
      headerName: '미정산 마일리지',
      width: 230,
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
      <UserDormantFilter />
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

export default UserDormant;
