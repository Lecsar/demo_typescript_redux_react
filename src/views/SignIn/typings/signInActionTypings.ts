import {
  SIGN_IN_SET_INPUT,
  SIGN_IN,
  SIGN_IN_AUTO,
  SIGN_IN_LOGOUT,
  SIGN_IN_NEED_UPDATE_PASSWORD,
  SIGN_IN_TOGGLE_CONFIRMED
} from '../const';
import { RESET_PASSWORD } from 'views/ResetPassword/const';

export enum SignInFieldName {
  login = 'login',
  password = 'password'
}

export interface SetInputValueData {
  fieldName: SignInFieldName;
  value: string;
}

export type SignInActionName =
  | typeof SIGN_IN_SET_INPUT
  | typeof SIGN_IN_TOGGLE_CONFIRMED
  | typeof SIGN_IN
  | typeof SIGN_IN_AUTO
  | typeof SIGN_IN_LOGOUT
  | typeof SIGN_IN_NEED_UPDATE_PASSWORD
  | typeof RESET_PASSWORD;
