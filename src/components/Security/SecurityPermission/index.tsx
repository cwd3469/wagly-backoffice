import React from 'react';
import { Box, Button } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import SecurityFilter from './modules/SecurityFilter';
import { SecurityPermissionType } from './type';
import mockSecurityPermission from '@mocks/mockSecurityPermission';
import { history } from '@store/index';
import { CheckBoxs, CheckPermission } from './modules/SecurityModules';

const SecurityPermission = (): JSX.Element => {
  const data: SecurityPermissionType[] = mockSecurityPermission;
  const columns: GridColDef[] = [
    {
      field: 'groupName',
      headerName: '권한 그룹 명',
      width: 150,
      editable: false,
    },
    {
      field: 'registrationDate',
      headerName: '등록일',
      width: 150,
      editable: false,
    },
    {
      field: 'registrarId',
      headerName: '등록자 ID',
      width: 150,
      editable: false,
    },
    {
      field: 'interlockingPattern',
      headerName: '연동 형황',
      sortable: false,
      renderHeader: CheckPermission,
      width: 250,
      editable: false,
      renderCell: CheckBoxs,
    },
    {
      field: 'member',
      headerName: '회원',
      sortable: false,
      renderHeader: CheckPermission,
      width: 150,
      editable: false,
      renderCell: CheckBoxs,
    },
    {
      field: 'publicNotice',
      headerName: '공고',
      sortable: false,
      renderHeader: CheckPermission,
      width: 150,
      editable: false,
      renderCell: CheckBoxs,
    },
    {
      field: 'dispatch',
      headerName: '배차',
      sortable: false,
      renderHeader: CheckPermission,
      width: 150,
      editable: false,
      renderCell: CheckBoxs,
    },
    {
      field: 'pacerSettlement',
      headerName: '페이서 정산',
      sortable: false,
      renderHeader: CheckPermission,
      width: 150,
      editable: false,
      renderCell: CheckBoxs,
    },
    {
      field: 'storeSettlement',
      headerName: '상점 정산',
      sortable: false,
      renderHeader: CheckPermission,
      width: 150,
      editable: false,
      renderCell: CheckBoxs,
    },
    {
      field: 'termsConditions',
      headerName: '약관 및 계약서',
      sortable: false,
      renderHeader: CheckPermission,
      width: 200,
      editable: false,
      renderCell: CheckBoxs,
    },
    {
      field: 'bulletinBoard',
      headerName: '게시판',
      sortable: false,
      renderHeader: CheckPermission,
      width: 200,
      editable: false,
      renderCell: CheckBoxs,
    },
    {
      field: 'banner',
      headerName: '배너',
      sortable: false,
      renderHeader: CheckPermission,
      width: 200,
      editable: false,
      renderCell: CheckBoxs,
    },
    {
      field: 'registeredUsersNum',
      headerName: '등록된 사용자 수',
      width: 150,
      editable: false,
    },
    {
      field: 'registeredusers',
      headerName: '등록된 사용자 보기',
      width: 150,
      editable: false,
      renderCell: (params) => {
        return (
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={() => {
              const id = params.row.id;
              history.push(`/`);
            }}
          >
            사용자 보기
          </Button>
        );
      },
    },
    {
      field: 'viewDetails',
      headerName: '권한 상세 보기',
      width: 150,
      editable: false,
      renderCell: (params) => {
        return (
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={() => {
              const id = params.row.id;
              history.push(`/security/permission/edit/?id=${id}&state=fix`);
            }}
          >
            상세보기
          </Button>
        );
      },
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
          disableColumnMenu
        />
      </div>
    </Box>
  );
};

export default SecurityPermission;
