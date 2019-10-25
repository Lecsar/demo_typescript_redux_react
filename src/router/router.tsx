import React from 'react';
import { Route, Switch } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import { Form, Cabinet, SignIn, ResetPassword } from 'views';
import {
  withLoading,
  withProtected,
  withRedirect,
  RedirectPredicate
} from 'HOC';
import { compose } from 'recompose';
import { AppState } from 'store';
import {
  CABINET_PAGE,
  FORM_PAGE,
  SIGN_IN_PAGE,
  RESET_PASSWORD_PAGE
} from './routes';
import { withRouterStyles } from './routerStyles';
import 'react-toastify/dist/ReactToastify.css';

type ReducerName = Exclude<keyof AppState, 'router'>;

const withProtectAndLoading = (reducerName: ReducerName, Component: any) =>
  compose(
    withProtected,
    withLoading(reducerName)
  )(Component);

const withRedirectAndLoading = (
  reducerName: ReducerName,
  predicate: RedirectPredicate,
  redirectUrl: string,
  Component: any
) =>
  compose(
    withRedirect(predicate, redirectUrl),
    withLoading(reducerName)
  )(Component);

export const Router = () => {
  const { toastContainer } = withRouterStyles();

  return (
    <>
      <Switch>
        <Route
          exact
          path={CABINET_PAGE}
          component={withProtectAndLoading('cabinet', Cabinet)}
        />
        <Route
          exact
          path={`${FORM_PAGE}/:templateId`}
          component={withProtectAndLoading('form', Form)}
        />
        <Route
          exact
          path={SIGN_IN_PAGE}
          component={withLoading('signIn')(SignIn)}
        />
        <Route
          exact
          path={RESET_PASSWORD_PAGE}
          component={withRedirectAndLoading(
            'resetPassword',
            ({ signIn }) => signIn.shouldChangePassword,
            SIGN_IN_PAGE,
            ResetPassword
          )}
        />
      </Switch>
      <ToastContainer
        className={toastContainer}
        position={toast.POSITION.BOTTOM_LEFT}
      />
    </>
  );
};
