import React from 'react';
import { createRoot } from 'react-dom/client';
import './assets/scss/reset.scss';
import './assets/scss/root.scss';

import { PersistGate } from 'redux-persist/lib/integration/react';
import App from './pages/App';
import { store, persistor } from './store';
import { Provider, ReactReduxContext } from 'react-redux';
import { worker } from '@mocks/browser';
import { history } from './store';
import { ConnectedRouter } from 'connected-react-router';

const container = document.getElementById('root');
const root = createRoot(container as Element);

const isDevelopment = process.env.NODE_ENV === 'development';

if (isDevelopment) {
  worker.start({
    onUnhandledRequest: 'bypass',
  });
}

const app = (
  <Provider store={store} context={ReactReduxContext}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </PersistGate>
  </Provider>
);

root.render(app);
