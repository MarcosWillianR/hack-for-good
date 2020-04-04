import React from 'react';

import './config/ReactotronConfig';

import Routes from './routes';

import GlobalStyle from './styles/global';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  );
}
