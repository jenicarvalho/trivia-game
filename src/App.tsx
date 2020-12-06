import React from 'react'
import { GlobalStyle, Main } from './App.styles'
import Routes from './routes'

import { Provider } from "react-redux"
import store from "./store"


function App() {
  return (
    <Provider store={store}>
      <Main>
        <GlobalStyle />
        <Routes />
      </Main>
    </Provider>
  );
}

export default App;
