import React from 'react';
import { Button, Box } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import RegularFilter from './modules/RegularFilter';
import RegularModal from './modules/RegularModal';
import { DispatchRegularType } from './type';
import mockDispatchRegular from '@mocks/mockDispatchRegular.json';

const DispatchRegular = (): JSX.Element => {
  const [onSubscriber, setOnSubscriber] = React.useState<boolean>(false);
  const [onSubscriberId, setonSubscriberId] = React.useState<number>(0);
  // const data: DispatchRegulartype[] = useAppSelector((state) => state.user.userPacerList);
  const data: DispatchRegularType[] = mockDispatchRegular;
  // const dispatch = useAppDispatch();

  const handleSubscriberModal = () => {
    setOnSubscriber(!onSubscriber);
  };

  const columns: GridColDef[] = [
    {
      field: 'pos',
      headerName: 'POS',
      width: 150,
      editable: false,
      headerClassName: 'super-app-theme--header',
    },
    {
      field: 'requestDate',
      headerName: '배차 요청 일시 ',
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
      field: 'dispatchArea',
      headerName: '배차요청지역',
      width: 150,
      editable: false,
    },
    {
      field: 'dispatchStoreId',
      headerName: '배차 요청 상점 아이디',
      width: 150,
      editable: false,
    },
    {
      field: 'dispatchStatus',
      headerName: '배차 상태',
      width: 150,
      editable: false,
    },
    {
      field: 'dispatchStatusChangeDate',
      headerName: '배차상태변경일시',
      width: 150,
      editable: false,
    },
    {
      field: 'dispatchPacerId',
      headerName: '배차 페이서 아이디',
      width: 150,
      editable: false,
    },
    {
      field: 'deliveryMethod',
      headerName: '배달수단',
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
      <RegularFilter />
      <div style={{ height: 800, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={15}
          rowsPerPageOptions={[15]}
          disableSelectionOnClick
        />
      </div>
      <RegularModal open={onSubscriber} handleClose={handleSubscriberModal} ID={onSubscriberId} />
    </Box>
  );
};

export default DispatchRegular;
