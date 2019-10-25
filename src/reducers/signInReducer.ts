import { ReducerData } from 'utils';
import { AsyncPhaseNames } from 'const';
import {
  SignInActionName,
  SetInputValueData,
  SignInFieldName
} from 'views/SignIn/typings';
import produce from 'immer';
import { createReducer } from './createRootReducer';
import {
  SIGN_IN_SET_INPUT,
  SIGN_IN_AUTO,
  SIGN_IN_LOGOUT,
  SIGN_IN_NEED_UPDATE_PASSWORD,
  SIGN_IN_TOGGLE_CONFIRMED
} from 'views/SignIn/const';
import { RESET_PASSWORD } from 'views/ResetPassword/const';

interface SignInReducer {
  shouldChangePassword: boolean;
  isFirstAuthTry: boolean;
  isAuthorized: boolean;
  isLoading: boolean;
  error: string | false;
  login: string;
  password: string;
  confirmedAgreement: boolean;
  [x: string]: any;
}

const initialState: SignInReducer = {
  shouldChangePassword: false,
  isFirstAuthTry: true,
  isAuthorized: false,
  isLoading: false,
  error: false,
  [SignInFieldName.login]: '',
  [SignInFieldName.password]: '',
  confirmedAgreement: false
};

const signInReducerData: ReducerData<
  SignInReducer,
  SignInActionName,
  AsyncPhaseNames
> = {
  [SIGN_IN_SET_INPUT]: (s, { fieldName, value }: SetInputValueData) =>
    produce(s, d => {
      d[fieldName] = value;
    }),
  [SIGN_IN_TOGGLE_CONFIRMED]: s => ({
    ...s,
    confirmedAgreement: !s.confirmedAgreement
  }),
  SIGN_IN: {
    REQUEST: s => ({ ...s, isLoading: true, error: false }),
    SUCCESS: () => ({
      ...initialState,
      isAuthorized: true,
      isFirstAuthTry: false
    }),
    ERROR: (s, { error }) => ({
      ...s,
      isLoading: false,
      isFirstAuthTry: false,
      password: '',
      error: error.message || error
    })
  },
  [SIGN_IN_AUTO]: {
    REQUEST: s => ({ ...s, isLoading: true }),
    SUCCESS: s => ({
      ...s,
      isLoading: false,
      isAuthorized: true,
      isFirstAuthTry: false
    }),
    ERROR: s => ({ ...s, isLoading: false, isFirstAuthTry: false })
  },
  [SIGN_IN_LOGOUT]: {
    REQUEST: s => ({ ...s, isLoading: true }),
    SUCCESS: s => ({ ...s, isLoading: false, isAuthorized: false }),
    // TODO: написать нормальный обработчик на ошибку logOut
    ERROR: s => ({ ...s, isLoading: false })
  },
  [SIGN_IN_NEED_UPDATE_PASSWORD]: s => ({ ...s, shouldChangePassword: true }),
  [RESET_PASSWORD]: {
    SUCCESS: s => ({ ...s, error: false, shouldChangePassword: false })
  }
};

export const signInReducer = createReducer<SignInReducer, SignInActionName>(
  signInReducerData,
  initialState
);
