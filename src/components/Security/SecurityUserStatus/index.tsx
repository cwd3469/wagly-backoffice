import React from 'react';
import { Box, IconButton, Grid, Button } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import SecurityFilter from './modules/SecurityFilter';
import { SecurityUserStatusType } from './type';
import mockSecurityUserStatus from '@mocks/mockSecurityUserStatus.json';
import { history } from '@store/index';

const SecurityUserStatus = (): JSX.Element => {
  // const data: SecurityUserStatustype[] = useAppSelector((state) => state.user.userPacerList);
  const data: SecurityUserStatusType[] = mockSecurityUserStatus;
  // const dispatch = useAppDispatch();

  const columns: GridColDef[] = [
    {
      field: 'PermissionGroup',
      headerName: '권한그룹',
      width: 150,
      editable: false,
      headerClassName: 'super-app-theme--header',
    },
    {
      field: 'userId',
      headerName: 'ID',
      width: 150,
      editable: false,
    },
    {
      field: 'userName',
      headerName: '이름',
      width: 150,
      editable: false,
    },
    {
      field: 'accountStatus',
      headerName: '계정 상태',
      width: 150,
      editable: false,
    },
    {
      field: 'reason',
      headerName: '사유',
      width: 150,
      editable: false,
    },
    {
      field: 'accountRegistrationDate',
      headerName: '계정 등록일',
      width: 220,
      editable: false,
    },
    {
      field: 'lastConnectionDate',
      headerName: '마지막 접속일',
      width: 220,
      editable: false,
    },
    {
      field: 'registeredPerson',
      headerName: '등록자',
      width: 220,
      editable: false,
    },
    {
      field: 'detailView',
      headerName: '상세보기',
      width: 300,
      editable: false,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={() => {
            const id = params.row.id;
            history.push(`/security/user/edit/?id=${id}&state=fix`);
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

export default SecurityUserStatus;
