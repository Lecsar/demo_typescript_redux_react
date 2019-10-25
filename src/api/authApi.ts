import {
  ADRESS_WITH_PORT,
  NEED_UPDATE_PASSWORD_TEXT,
  SERVER_ERROR_TEXT,
  WRONG_LOGIN_OR_PASSWORD,
  SESSION_TIME_EXPIRED,
  ERROR_AFTER_LOGIN,
  UNKNOW_AUTH_ERROR,
  RequestStatus
} from 'const';
import { setFetchSessionId, callAPI, removeSessionId } from './apiFetch';

class AuthApi {
  private static authUrl = `${ADRESS_WITH_PORT}/auth`;
  private static authLogoutUrl = `${ADRESS_WITH_PORT}/auth/logout`;

  signIn(login: string, password: string) {
    return fetch(AuthApi.authUrl, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({ login, password })
    })
      .then(res => {
        return res.json();
      })
      .then(responseData => {
        if (!responseData) {
          return Promise.reject(UNKNOW_AUTH_ERROR);
        }

        switch (responseData.status) {
          case RequestStatus.LOGIN_SUCCESS:
            setFetchSessionId(responseData.sessionId);
            return Promise.resolve();
          case RequestStatus.NEED_UPDATE_PASSWORD:
            return Promise.reject(NEED_UPDATE_PASSWORD_TEXT);
          case RequestStatus.INVALID_CREDINTIALS:
            return Promise.reject(WRONG_LOGIN_OR_PASSWORD);
          default:
            setFetchSessionId(responseData);
        }
      });
  }

  signInAuto() {
    return callAPI(AuthApi.authUrl, { shouldForbiddenCheck: false }).then(res =>
      res.status === RequestStatus.SUCCESS
        ? res.text()
        : Promise.reject(SESSION_TIME_EXPIRED)
    );
  }

  logout() {
    return fetch(AuthApi.authLogoutUrl, {
      method: 'GET'
    })
      .then(res => {
        if (res.status === RequestStatus.SUCCESS) {
          return res.text();
        }

        return Promise.reject(ERROR_AFTER_LOGIN);
      })
      .then(removeSessionId);
  }

  resetPassword(
    login: string,
    newPassword: string,
    confirmationNewPassword: string
  ) {
    return fetch(AuthApi.authUrl, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'PUT',
      body: JSON.stringify({
        login,
        password: newPassword,
        conf_password: confirmationNewPassword
      })
    }).then(res => {
      if (res.status === RequestStatus.SUCCESS) {
        return res.text();
      }

      return Promise.reject(SERVER_ERROR_TEXT);
    });
  }
}

export const authApi = new AuthApi();
