import React from 'react';
import { Box } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import PacerWithdrawalFilter from './modules/PacerWithdrawalFilter';
import { PacerwithdrawalType } from './type';
import mockPacerwithdrawal from '@mocks/mockPacerwithdrawal.json';

const Pacerwithdrawal = (): JSX.Element => {
  // const data: Pacerwithdrawaltype[] = useAppSelector((state) => state.user.userPacerList);
  const data: PacerwithdrawalType[] = mockPacerwithdrawal;
  // const dispatch = useAppDispatch();

  const columns: GridColDef[] = [
    {
      field: 'withdrawalDate',
      headerName: '출금일',
      width: 150,
      editable: false,
      headerClassName: 'super-app-theme--header',
    },
    {
      field: 'pacerId',
      headerName: '페이서 아이디',
      width: 250,
      editable: false,
    },
    {
      field: 'totalAmount',
      headerName: '총 정산 금액',
      width: 150,
      editable: false,
    },
    {
      field: 'normalAmount',
      headerName: '정규 정산 금액 / 건 수',
      width: 150,
      editable: false,
    },
    {
      field: 'emergencyAmount',
      headerName: '긴급 정산 금액 / 건 수 ',
      width: 150,
      editable: false,
    },
    {
      field: 'reservationAmount',
      headerName: '예약 정산 금액 / 건 수 ',
      width: 150,
      editable: false,
    },
    {
      field: 'withdrawalBank',
      headerName: '출금 은행',
      width: 150,
      editable: false,
    },

    {
      field: 'withdrawalAccountNumber',
      headerName: '출금 계좌번호',
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
      <PacerWithdrawalFilter />
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

export default Pacerwithdrawal;
