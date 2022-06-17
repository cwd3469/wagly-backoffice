import React from 'react';
import { Button, Box } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import EmergencyFilter from './modules/EmergencyFilter';
import EmergencyModal from './modules/EmergencyModal';
import { Employmenttype } from './type';
import mockNoticeEmployment from '@mocks/mockNoticeEmployment.json';

const NoticeEmergency = (): JSX.Element => {
  const [onDetailsView, setOnDetailsView] = React.useState<boolean>(false);
  const [onDetailsViewId, setonDetailsViewId] = React.useState<number>(0);
  // const data: NoticeEmergencytype[] = useAppSelector((state) => state.user.userPacerList);
  const data: Employmenttype[] = mockNoticeEmployment;
  // const dispatch = useAppDispatch();

  const handleDetailsViewModal = () => {
    setOnDetailsView(!onDetailsView);
  };

  const columns: GridColDef[] = [
    {
      field: 'period',
      headerName: '공고게시/마감일',
      width: 150,
      editable: false,
      headerClassName: 'super-app-theme--header',
    },
    {
      field: 'postingId',
      headerName: '채용 공고 아이디',
      width: 150,
      editable: false,
    },
    {
      field: 'area',
      headerName: '지역',
      width: 150,
      editable: false,
    },
    {
      field: 'storeId',
      headerName: '등록 상점 아이디',
      width: 150,
      editable: false,
    },
    {
      field: 'storeName',
      headerName: '상점 상호명',
      width: 150,
      editable: false,
    },
    {
      field: 'noticeName',
      headerName: '공고 명',
      width: 150,
      editable: false,
    },
    {
      field: 'noticeStatus',
      headerName: '공고 상태',
      width: 150,
      editable: false,
    },
    {
      field: 'exposure',
      headerName: '노출',
      width: 150,
      editable: false,
    },
    {
      field: 'applicationsNum',
      headerName: '지원 수',
      width: 150,
      editable: false,
    },
    {
      field: 'detailsView',
      headerName: '상세 보기',
      width: 150,
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
      <EmergencyFilter />
      <div style={{ height: 800, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={15}
          rowsPerPageOptions={[15]}
          disableSelectionOnClick
        />
      </div>
      <EmergencyModal
        open={onDetailsView}
        handleClose={handleDetailsViewModal}
        ID={onDetailsViewId}
      />
    </Box>
  );
};

export default NoticeEmergency;
