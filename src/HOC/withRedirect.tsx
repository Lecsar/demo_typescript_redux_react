import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { AppState } from 'store';

type StateWithoutRouter = Omit<AppState, 'router'>;
export type RedirectPredicate = (state: StateWithoutRouter) => boolean;

interface WrapperProps {
  WrappedComponent: any;
  predicate: RedirectPredicate;
  redirectUrl: string;
  state: StateWithoutRouter;
}

const mapStateToProps = ({ router, ...state }: AppState) => ({ state });

const Wrapper = ({
  WrappedComponent,
  predicate,
  redirectUrl,
  state,
  ...props
}: WrapperProps) =>
  predicate(state) ? (
    <WrappedComponent {...props} />
  ) : (
    <Redirect to={redirectUrl} />
  );

const WrapperWithStore = connect(mapStateToProps)(Wrapper);

export const withRedirect = (
  predicate: RedirectPredicate,
  redirectUrl: string
) => (WrappedComponent: any) => (props: any) => (
  <WrapperWithStore
    WrappedComponent={WrappedComponent}
    predicate={predicate}
    redirectUrl={redirectUrl}
    {...props}
  />
);
