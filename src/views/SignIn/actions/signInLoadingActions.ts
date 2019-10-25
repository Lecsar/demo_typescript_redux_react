import { Dispatch } from 'redux';
import { CABINET_PAGE, RESET_PASSWORD_PAGE } from 'router';
import { AppState } from 'store';
import { authApi } from 'api';
import { ROUTING, NEED_UPDATE_PASSWORD_TEXT } from 'const';
import { SIGN_IN, SIGN_IN_AUTO, SIGN_IN_NEED_UPDATE_PASSWORD } from '../const';

export const signIn = () => ({
  asyncType: SIGN_IN,
  callAPI: ({ signIn: { login, password } }: AppState) =>
    authApi.signIn(login, password),
  additionalActions: {
    successAction: (dispatch: Dispatch) => {
      dispatch({
        type: ROUTING,
        payload: { method: 'push', nextUrl: CABINET_PAGE }
      });
    },

    //TODO: ResetPassword functionality
    errorAction: (dispatch: Dispatch, error: string) => {
      if (error === NEED_UPDATE_PASSWORD_TEXT) {
        dispatch({
          type: SIGN_IN_NEED_UPDATE_PASSWORD
        });

        dispatch({
          type: ROUTING,
          payload: {
            method: 'push',
            nextUrl: RESET_PASSWORD_PAGE
          }
        });
      }
    }
  }
});

export const signInAuto = () => ({
  asyncType: SIGN_IN_AUTO,
  callAPI: authApi.signInAuto
});
