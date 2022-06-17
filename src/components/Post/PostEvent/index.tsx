import React from 'react';
import { Box, Button } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import PostFaqFilter from './modules/PostFaqFilter';
import PostFaqModal from './modules/PostFaqModal';
import { PostFaqType } from './type';
import mockPostFaq from '@mocks/mockPostFaq.json';

const PostFaq = (): JSX.Element => {
  const [onDetailsViewId, setonDetailsViewId] = React.useState<number>(0);
  const [onModal, setOnModal] = React.useState<boolean>(false);
  const handleDetailsViewModal = (): void => {
    setOnModal(!onModal);
  };
  const data: PostFaqType[] = mockPostFaq;

  const columns: GridColDef[] = [
    {
      field: 'exposureStatus',
      headerName: '노출여부',
      width: 150,
      editable: false,
      headerClassName: 'super-app-theme--header',
    },
    {
      field: 'firstRegistrarId',
      headerName: '최초등록자아이디',
      width: 150,
      editable: false,
    },
    {
      field: 'lastModifierId',
      headerName: '최초등록일',
      width: 150,
      editable: false,
    },
    {
      field: 'lastRevisionDate',
      headerName: '최종수정자아이디',
      width: 150,
      editable: false,
    },
    {
      field: 'RevisionDate',
      headerName: '최종수정일',
      width: 150,
      editable: false,
      renderCell: (params) => <>2022. 02. 17 15:30</>,
    },
    {
      field: 'publishingPeriod',
      headerName: '게시 기간',
      width: 250,
      editable: false,
      renderCell: (params) => <>2022. 02. 17 15:00 ~ 2022. 02. 18 15:00</>,
    },
    {
      field: 'type',
      headerName: '최종수정일',
      width: 150,
      editable: false,
    },
    {
      field: 'title',
      headerName: '제목',
      width: 150,
      editable: false,
    },
    {
      field: 'usingModifications',
      headerName: '수정사유',
      width: 350,
      editable: false,
    },

    {
      field: 'viewDetails',
      headerName: '상세보기',
      width: 150,
      editable: false,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={() => {
            const id = params.row.id;
            setonDetailsViewId(id);
            handleDetailsViewModal();
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
      <PostFaqFilter />
      <div style={{ height: 800, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={15}
          rowsPerPageOptions={[15]}
          disableSelectionOnClick
        />
      </div>
      <PostFaqModal open={onModal} handleClose={handleDetailsViewModal} ID={onDetailsViewId} />
    </Box>
  );
};

export default PostFaq;
