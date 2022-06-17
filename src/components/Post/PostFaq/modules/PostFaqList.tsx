import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import mockPostNoticeList from '@mocks/mockPostNoticeList.json';
import { PostNoticeListType } from '../type';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  intro: {
    padding: '5px!important' as any,
    display: 'block!important' as any,
    maxWidth: '300px!important' as any,
    width: '300px!important' as any,
    whiteSpace: 'normal!important' as any,
    wordWrap: 'break-word!important' as any,
  },
});

export default function PostFaqList() {
  const classes = useStyles();
  const columns: GridColDef[] = [
    {
      field: 'modificationTime',
      headerName: '수정시간',
      width: 220,
      editable: false,
    },
    {
      field: 'modificationId',
      headerName: '수정아이디',
      width: 220,
      editable: false,
    },
    {
      field: 'authority',
      headerName: '권한',
      width: 150,
      editable: false,
    },
    {
      field: 'reason',
      headerName: '사유',
      width: 150,
      editable: false,
    },
  ];
  const data: PostNoticeListType[] = mockPostNoticeList;

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
