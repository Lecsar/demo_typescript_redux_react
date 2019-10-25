import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { SIGN_IN_PAGE } from 'router';
import { BlockSpinner } from 'components';
import { signInAuto } from 'views/SignIn/actions';

const mapStateToProps = ({ signIn: { isAuthorized, isFirstAuthTry } }) => ({
  isAuthorized,
  isFirstAuthTry,
});

const Wrapper = ({ WrappedComponent, isAuthorized, isFirstAuthTry, signInAuto, ...props }) => {
  useEffect(() => {
    if (!isAuthorized && isFirstAuthTry) {
      signInAuto();
    }
  }, [signInAuto, isAuthorized, isFirstAuthTry]);

  if (isAuthorized) {
    return <WrappedComponent {...props} />;
  }

  if (isFirstAuthTry) {
    return <BlockSpinner />;
  }

  return <Redirect to={SIGN_IN_PAGE} />;
};

const WrapperWithStore = connect(
  mapStateToProps,
  { signInAuto }
)(Wrapper);

export const withProtected = WrappedComponent => props => (
  <WrapperWithStore WrappedComponent={WrappedComponent} {...props} />
);
