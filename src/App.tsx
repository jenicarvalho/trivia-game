import React from 'react';
import { GlobalStyle, Main } from './App.styles';
import Routes from './routes'

function App() {
  return (
    <Main>
      <GlobalStyle />
      <Routes />
    </Main>
  );
}

export default App;
