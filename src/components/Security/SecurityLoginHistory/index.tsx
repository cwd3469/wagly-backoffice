import React from 'react';
import { Box } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import SecurityFilter from './modules/SecurityFilter';
import { SecurityLoginHistoryType } from './type';
import mockSecurityLoginHistory from '@mocks/mockSecurityLoginHistory.json';

const SecurityLoginHistory = (): JSX.Element => {
  const data: SecurityLoginHistoryType[] = mockSecurityLoginHistory;

  const columns: GridColDef[] = [
    {
      field: 'logDate',
      headerName: '로그인/로그아웃 일시',
      width: 250,
      editable: false,
      headerClassName: 'super-app-theme--header',
    },

    {
      field: 'privilegeGroups',
      headerName: '권한 그룹',
      width: 150,
      editable: false,
    },
    {
      field: 'sortation',
      headerName: '구분',
      width: 150,
      editable: false,
    },
    {
      field: 'userId',
      headerName: '사용자ID',
      width: 150,
      editable: false,
    },
    {
      field: 'ipAddress',
      headerName: 'IP 주소',
      width: 220,
      editable: false,
    },
    {
      field: 'remarks',
      headerName: '비고',
      width: 350,
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
      <SecurityFilter />
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

export default SecurityLoginHistory;
