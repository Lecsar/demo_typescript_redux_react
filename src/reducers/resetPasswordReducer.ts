import produce from 'immer';
import { ReducerData } from 'utils';
import { AsyncPhaseNames } from 'const';
import {
  ResetPasswordActionName,
  SetInputValueData,
  ResetPasswordFieldName
} from 'views/ResetPassword/typings';
import {
  RESET_PASSWORD_SET_INPUT,
  RESET_PASSWORD
} from 'views/ResetPassword/const';
import { createReducer } from './createRootReducer';

interface ResetPasswordReducer {
  isLoading: boolean;
  error: string | false;
  newPassword: string;
  confirmationNewPassword: string;
  [x: string]: any;
}

const initialState: ResetPasswordReducer = {
  isLoading: false,
  error: false,
  [ResetPasswordFieldName.newPassword]: '',
  [ResetPasswordFieldName.confirmationNewPassword]: ''
};

const resetPasswordReducerData: ReducerData<
  ResetPasswordReducer,
  ResetPasswordActionName,
  AsyncPhaseNames
> = {
  [RESET_PASSWORD_SET_INPUT]: (s, { fieldName, value }: SetInputValueData) =>
    produce(s, d => {
      d[fieldName] = value;
    }),
  [RESET_PASSWORD]: {
    REQUEST: s => ({ ...s, isLoading: true }),
    SUCCESS: () => ({ ...initialState }),
    ERROR: (s, { error }) => ({
      ...initialState,
      isLoading: false,
      error: error.message || error
    })
  }
};

export const resetPasswordReducer = createReducer<
  ResetPasswordReducer,
  ResetPasswordActionName
>(resetPasswordReducerData, initialState);
