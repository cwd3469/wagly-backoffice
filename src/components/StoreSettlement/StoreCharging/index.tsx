import React from 'react';
import { Box } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import AccumulationFilter from './modules/AccumulationFilter';
import { StoreChargingType } from './type';
import mockStoreCharging from '@mocks/mockStoreCharging.json';

const StoreCharging = (): JSX.Element => {
  // const data: StoreChargingtype[] = useAppSelector((state) => state.user.userPacerList);
  const data: StoreChargingType[] = mockStoreCharging;
  // const dispatch = useAppDispatch();

  const columns: GridColDef[] = [
    {
      field: 'chargingDate',
      headerName: '충전 일시',
      width: 170,
      editable: false,
      headerClassName: 'super-app-theme--header',
    },
    {
      field: 'storeId',
      headerName: '상점 아이디',
      width: 170,
      editable: false,
    },
    {
      field: 'chargingType',
      headerName: '충전 / 환불 타입',
      width: 170,
      editable: false,
    },
    {
      field: 'chargingMeans',
      headerName: '충전 / 환불 수단',
      width: 170,
      editable: false,
    },
    {
      field: 'chargeAmount',
      headerName: '충전 / 환불 금액',
      width: 170,
      editable: false,
    },

    {
      field: 'mileage',
      headerName: '충전 / 환불 후 잔여 마일리지',
      width: 170,
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
      <AccumulationFilter />
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

export default StoreCharging;
