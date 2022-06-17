import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import mockEmploymentInfo from '@mocks/mockEmploymentInfo.json';
import { EmploymentListtype } from '../type';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  supportIime: {},
  profileId: {},
  deliveryFee: {},
  premium: {},
  suggestionMeans: {},
  intro: {
    padding: '5px!important' as any,
    display: 'block!important' as any,
    maxWidth: '300px!important' as any,
    width: '300px!important' as any,
    whiteSpace: 'normal!important' as any,
    wordWrap: 'break-word!important' as any,
  },
  accepted: {},
});

export default function EmploymentList() {
  const classes = useStyles();
  const columns: GridColDef[] = [
    { field: 'supportIime', headerName: '지원 시간', width: 140 },
    {
      field: 'profileId',
      headerName: '프로필 아이디',
      width: 150,
      editable: false,
    },
    {
      field: 'deliveryFee',
      headerName: '기본 배달료',
      width: 110,
      editable: false,
    },
    {
      field: 'premium',
      headerName: '할증료',
      type: 'number',
      width: 110,
      editable: false,
    },
    {
      field: 'suggestionMeans',
      headerName: '제안 수단',
      width: 110,
      editable: false,
    },
    {
      field: 'intro',
      headerName: '자기소개',
      width: 310,
      editable: false,
      cellClassName: classes.intro,
    },
    {
      field: 'accepted',
      headerName: '수락',
      width: 110,
      editable: false,
    },
  ];
  const data: EmploymentListtype[] = mockEmploymentInfo;

  const rows = data;

  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={15}
        rowsPerPageOptions={[15]}
        disableSelectionOnClick
      />
    </div>
  );
}
