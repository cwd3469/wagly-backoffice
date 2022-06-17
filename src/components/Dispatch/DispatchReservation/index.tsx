import React from 'react';
import { Button, Box } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import ReservationFilter from './modules/ReservationFilter';
import ReservationModal from './modules/ReservationModal';
import { DispatchReservationType } from './type';
import mockDispatchReservation from '@mocks/mockDispatchReservation.json';

const DispatchReservation = (): JSX.Element => {
  const [onSubscriber, setOnSubscriber] = React.useState<boolean>(false);
  const [onSubscriberId, setonSubscriberId] = React.useState<number>(0);
  // const data: DispatchReservationtype[] = useAppSelector((state) => state.user.userPacerList);
  const data: DispatchReservationType[] = mockDispatchReservation;
  // const dispatch = useAppDispatch();

  const handleSubscriberModal = () => {
    setOnSubscriber(!onSubscriber);
  };

  const columns: GridColDef[] = [
    {
      field: 'dispatchDate',
      headerName: '배차 생성일시',
      width: 150,
      editable: false,
      headerClassName: 'super-app-theme--header',
    },
    {
      field: 'requestPeriod',
      headerName: '픽업/완료 요청 일시',
      width: 150,
      editable: false,
      headerClassName: 'super-app-theme--header',
    },
    {
      field: 'area',
      headerName: '배차 지역',
      width: 150,
      editable: false,
    },
    {
      field: 'dispatchId',
      headerName: '배차 아이디',
      width: 150,
      editable: false,
    },
    {
      field: 'noticeId',
      headerName: '공고 아이디',
      width: 150,
      editable: false,
    },
    {
      field: 'shopId',
      headerName: '상점 아이디',
      width: 150,
      editable: false,
    },
    {
      field: 'pacerId',
      headerName: '페이서 아이디',
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
      field: 'distributionName',
      headerName: '배차명',
      width: 150,
      editable: false,
    },
    {
      field: 'status',
      headerName: '배차 상태',
      width: 150,
      editable: false,
    },
    {
      field: 'detailsView',
      headerName: '배차 상세 보기',
      width: 150,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={() => {
            const id = params.row.id;
            setonSubscriberId(id);
            handleSubscriberModal();
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
      <ReservationFilter />
      <div style={{ height: 800, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={15}
          rowsPerPageOptions={[15]}
          disableSelectionOnClick
        />
      </div>
      <ReservationModal
        open={onSubscriber}
        handleClose={handleSubscriberModal}
        ID={onSubscriberId}
      />
    </Box>
  );
};

export default DispatchReservation;
