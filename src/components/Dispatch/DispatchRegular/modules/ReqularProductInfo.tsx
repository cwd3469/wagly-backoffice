import React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
const columns: GridColDef[] = [
  {
    field: 'menu',
    headerName: '메뉴',
    width: 250,
    editable: false,
  },
  {
    field: 'quantity',
    headerName: '수량',
    width: 150,
    editable: false,
  },
  {
    field: 'amount',
    headerName: '상품 금액',
    width: 250,
    editable: false,
  },
];

const rows = [
  { id: 1, menu: '햄버거', quantity: 1, amount: '15,000원' },
  { id: 2, menu: '피자', quantity: 1, amount: '23,000원' },
  { id: 3, menu: '마라탕', quantity: 1, amount: '33,000원' },
  { id: 4, menu: '돈까스', quantity: 1, amount: '35,000원' },
  { id: 5, menu: '곱창전골', quantity: 1, amount: '43,000원' },
  { id: 6, menu: '김치찌개', quantity: 2, amount: '23,000원' },
  { id: 7, menu: '삼겹살', quantity: 5, amount: '76,000원' },
  { id: 8, menu: '삼겹살', quantity: 5, amount: '76,000원' },
  { id: 9, menu: '삼겹살', quantity: 5, amount: '76,000원' },
  { id: 10, menu: '삼겹살', quantity: 5, amount: '76,000원' },
  { id: 11, menu: '삼겹살', quantity: 5, amount: '76,000원' },
  { id: 12, menu: '삼겹살', quantity: 5, amount: '76,000원' },
  { id: 13, menu: '삼겹살', quantity: 5, amount: '76,000원' },
  { id: 14, menu: '삼겹살', quantity: 5, amount: '76,000원' },
  { id: 15, menu: '삼겹살', quantity: 5, amount: '76,000원' },
  { id: 16, menu: '삼겹살', quantity: 5, amount: '76,000원' },
  { id: 17, menu: '삼겹살', quantity: 5, amount: '76,000원' },
  { id: 18, menu: '삼겹살', quantity: 5, amount: '76,000원' },
];

const ReqularProductInfo = () => {
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
};

export default ReqularProductInfo;
