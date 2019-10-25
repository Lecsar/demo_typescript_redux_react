import { RESET_PASSWORD_SET_INPUT, RESET_PASSWORD } from '../const';

export enum ResetPasswordFieldName {
  newPassword = 'newPassword',
  confirmationNewPassword = 'confirmationNewPassword'
}

export interface SetInputValueData {
  fieldName: ResetPasswordFieldName;
  value: string;
}

export type ResetPasswordActionName =
  | typeof RESET_PASSWORD_SET_INPUT
  | typeof RESET_PASSWORD;
