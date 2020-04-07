import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import './config/ReactotronConfig';

import Routes from './routes';

import { store, persistor } from './store';

import GlobalStyle from './styles/global';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <GlobalStyle />
        <Routes />
      </PersistGate>
    </Provider>
  );
}
