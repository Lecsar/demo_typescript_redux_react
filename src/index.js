import 'react-app-polyfill/stable';
import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';

import { history, configureStore } from './store';
import { Router } from './router';

export const store = configureStore();
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#fff',
      main: 'rgba(99, 103, 107, 0.93)',
      dark: '#000'
    },
    secondary: {
      main: '#f44336'
    }
  },
  typography: {
    useNextVariants: true,
    color: 'white'
  }
});

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <MuiThemeProvider theme={theme}>
        <Router />
      </MuiThemeProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
