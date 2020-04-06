import React from 'react';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';

import Routes from './routes';

import store from './store';

import GlobalStyle from './styles/global';

export default function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Routes />
    </Provider>
  );
}
