/* eslint-disable */
import { ThunkAction, Action } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory, History } from 'history';
import { rootReducer } from './modules';
import thunk from 'redux-thunk';
import * as Redux from 'redux';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};
export const history = createBrowserHistory();

const persistedReducer = persistReducer(persistConfig, rootReducer(history));

const useMiddleware = [routerMiddleware(history), thunk.withExtraArgument({ history: history })];

if (process.env.NODE_ENV !== 'production') {
  useMiddleware.push(logger);
}

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(...useMiddleware),
  devTools: process.env.NODE_ENV !== 'production' ? true : false,
});

export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
