import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import { createRootReducer } from 'reducers';
import { asyncMiddleware, redirect } from 'middlewares';
import {
  PHASE_SEPARATOR,
  PHASE_REQUEST,
  PHASE_ERROR,
  PHASE_SUCCESS
} from 'const';

export const history = createBrowserHistory();

const rootReducer = createRootReducer(history);
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const asyncOptions = {
  phaseSeparator: PHASE_SEPARATOR,
  requestPhaseName: PHASE_REQUEST,
  successPhaseName: PHASE_SUCCESS,
  errorPhaseName: PHASE_ERROR
};

export const configureStore = (preloadedState = {}) =>
  createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(
      applyMiddleware(
        routerMiddleware(history),
        thunk,
        asyncMiddleware(asyncOptions),
        redirect
      )
    )
  );

export type AppState = ReturnType<typeof rootReducer>;
