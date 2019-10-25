import { RESET_PASSWORD_SET_INPUT } from '../const';
import { SetInputValueData } from '../typings';

export const setResetPasswordInput = (inputData: SetInputValueData) => ({
  type: RESET_PASSWORD_SET_INPUT,
  ...inputData
});
