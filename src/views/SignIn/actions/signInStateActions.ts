import {
  SIGN_IN_SET_INPUT,
  SIGN_IN_LOGOUT,
  SIGN_IN_TOGGLE_CONFIRMED
} from '../const';
import { SetInputValueData } from '../typings';
import { authApi } from 'api';

export const setSignInInput = (inputData: SetInputValueData) => ({
  type: SIGN_IN_SET_INPUT,
  ...inputData
});

export const toggleConfirmedAgreement = () => ({
  type: SIGN_IN_TOGGLE_CONFIRMED
});

export const logout = () => ({
  asyncType: SIGN_IN_LOGOUT,
  callAPI: authApi.logout
});
