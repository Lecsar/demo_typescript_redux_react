import { get } from 'lodash';
import { SESSION_ID, RequestStatus, ROUTING } from 'const';
import { store } from 'index';
import { SIGN_IN_PAGE } from 'router';
import { toast } from 'react-toastify';

interface FetchOptions {
  init?: RequestInit;
  shouldForbiddenCheck?: boolean;
}

class ApiFetch {
  private sessionId = localStorage.getItem(SESSION_ID) || '';

  setSessionId = (sessionId: string) => {
    localStorage.setItem(SESSION_ID, sessionId);

    this.sessionId = sessionId;
  };

  removeSessionId = () => {
    localStorage.removeItem(SESSION_ID);
  };

  private setOptions = (init?: RequestInit) => {
    if (init) {
      const { headers, ...otherOptions } = init;

      return headers
        ? {
            headers: { sessionId: this.sessionId, ...headers },
            ...otherOptions
          }
        : { headers: { sessionId: this.sessionId }, ...otherOptions };
    }

    return { headers: { sessionId: this.sessionId } };
  };

  callAPI = (url: string, options?: FetchOptions) => {
    const init = get(options, 'init', {});
    const shouldForbiddenCheck = get(options, 'shouldForbiddenCheck', true);

    return fetch(url, this.setOptions(init)).then(res => {
      const { pathname } = store.getState().router.location;
      const shouldRedirectOnSignInPage =
        shouldForbiddenCheck &&
        pathname !== SIGN_IN_PAGE &&
        res.status === RequestStatus.FORBIDDEN;

      if (shouldRedirectOnSignInPage) {
        store.dispatch({
          type: ROUTING,
          payload: { method: 'push', nextUrl: SIGN_IN_PAGE }
        });

        toast.error('Сессия устарела, пожалуйста, авторизуйтесь заново');
        return Promise.reject(RequestStatus.FORBIDDEN);
      }

      return res;
    });
  };
}

const apiFetch = new ApiFetch();

export const setFetchSessionId = apiFetch.setSessionId;
export const removeSessionId = apiFetch.removeSessionId;
export const callAPI = apiFetch.callAPI;
