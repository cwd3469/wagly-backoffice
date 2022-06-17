import React from 'react';
import { Box, IconButton, Grid, Button } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import SecurityFilter from './modules/SecurityFilter';
import { SecurityUserExistType } from './type';
import mockSecurityUserExist from '@mocks/mockSecurityUserExist.json';
import { history } from '@store/index';

const SecurityUserExist = (): JSX.Element => {
  // const data: SecurityUserExisttype[] = useAppSelector((state) => state.user.userPacerList);
  const data: SecurityUserExistType[] = mockSecurityUserExist;
  // const dispatch = useAppDispatch();

  const columns: GridColDef[] = [
    {
      field: 'existDate',
      headerName: '생성/삭제 일시 ',
      width: 250,
      editable: false,
      headerClassName: 'super-app-theme--header',
    },
    {
      field: 'handlerId',
      headerName: '처리자 ID',
      width: 150,
      editable: false,
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
      field: 'username',
      headerName: '사용자 이름',
      width: 220,
      editable: false,
    },
    {
      field: 'existReasons',
      headerName: '승인 / 삭제 사유',
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

export default SecurityUserExist;
