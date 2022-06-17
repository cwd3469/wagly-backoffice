import { combineReducers } from 'redux';
import { History } from 'history';
import userReducer from './user';
import authReducer from './auth';
import { connectRouter } from 'connected-react-router';

export const rootReducer = (history: History) =>
  combineReducers({
    user: userReducer,
    auth: authReducer,
    router: connectRouter(history),
  });
