import instance from '.';

export const fetchOrderData = (token: string) => {
  return instance({
    method: 'get',
    url: '/order/list',
    headers: {
      Authorization: token,
    },
  });
};

export const fetchOrderExcel = (token: string) => {
  return instance({
    method: 'get',
    url: '/order/excel',
    headers: {
      Authorization: token,
    },
  });
};
