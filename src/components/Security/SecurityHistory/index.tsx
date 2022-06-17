import React from 'react';
import { Box, IconButton, Grid } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import SecurityFilter from './modules/SecurityFilter';
import { SecurityHistoryType } from './type';
import mockSecurityHistory from '@mocks/mockSecurityHistory.json';
const SecurityHistory = (): JSX.Element => {
  const data: SecurityHistoryType[] = mockSecurityHistory;

  const columns: GridColDef[] = [
    {
      field: 'ProcessingDate',
      headerName: '처리일시',
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
      field: 'targetMembership',
      headerName: '대상 회원 구분 ',
      width: 150,
      editable: false,
    },
    {
      field: 'performerId',
      headerName: '수행자 ID',
      width: 150,
      editable: false,
    },
    {
      field: 'performanceWork',
      headerName: '수행 업무',
      width: 220,
      editable: false,
    },
    {
      field: 'data',
      headerName: '생성,변경,삭제 정보',
      width: 350,
      editable: false,
    },
    {
      field: 'targetMemberId',
      headerName: '대상 회원 ID',
      width: 350,
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

export default SecurityHistory;
