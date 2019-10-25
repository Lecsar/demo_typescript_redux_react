import { Dispatch } from 'redux';
import { AppState } from 'store';
import { authApi } from 'api';
import { SIGN_IN_PAGE } from 'router';
import { ROUTING, SERVER_ERROR_TEXT } from 'const';
import { RESET_PASSWORD } from '../const';

export const resetPassword = () => ({
  asyncType: RESET_PASSWORD,
  callAPI: ({
    resetPassword: { newPassword, confirmationNewPassword },
    signIn: { login }
  }: AppState) =>
    authApi.resetPassword(login, newPassword, confirmationNewPassword),
  additionalActions: {
    successAction: (dispatch: Dispatch) => {
      dispatch({
        type: ROUTING,
        payload: { method: 'push', nextUrl: SIGN_IN_PAGE }
      });
    },

    errorAction: (dispatch: Dispatch, error: string) => {
      if (error === SERVER_ERROR_TEXT) {
        return;
      }
    }
  }
});
