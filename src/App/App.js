import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { Provider as StyleProvider } from 'rebass';
import { injectGlobal } from 'styled-components';
import { normalize } from 'polished';
import theme from './theme';
import { Header, Game } from '../layout';

import store from '../store';

//const { store } = storeObj;

// eslint-disable-next-line
injectGlobal`
  ${normalize()};
  * { box-sizing: border-box; }
  body { margin: 0; }
`;

const App = () => (
  <StoreProvider store={store}>
    <StyleProvider theme={theme}>
      <Header />

      <Game />
    </StyleProvider>
  </StoreProvider>
);

export default App;
