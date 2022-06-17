import axios, { AxiosInstance } from 'axios';

const instance: AxiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}api/v1/`,
  timeout: 3000,
});

// if (isLogin()) {
//   let type = store.getState().user.userInfo.token_type;
//   let refresh = store.getState().user.userInfo.access_token;
//   let token = `${type} ${refresh}`;
//   instance.defaults.headers.common['Authorization'] = token;
// }

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    const res = response;
    return res;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default instance;
