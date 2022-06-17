import instance from '.';

export const fetchUserPacerList = (token: string) => {
  return instance({
    method: 'get',
    url: '/user/pacer/list',
    headers: {
      Authorization: token,
    },
  });
};

export const fetchUserSubStoreList = (token: string) => {
  return instance({
    method: 'get',
    url: '/user/pacer/subscription',
    headers: {
      Authorization: token,
    },
  });
};
