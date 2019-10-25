import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { configureReducerCreator } from 'utils';
import { AsyncPhaseNames, PHASE_SEPARATOR } from 'const';
import {
  formReducer,
  cabinetReducer,
  signInReducer,
  resetPasswordReducer
} from './';

export const createReducer = configureReducerCreator<AsyncPhaseNames>(
  PHASE_SEPARATOR
);

export const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    form: formReducer,
    cabinet: cabinetReducer,
    signIn: signInReducer,
    resetPassword: resetPasswordReducer
  });
