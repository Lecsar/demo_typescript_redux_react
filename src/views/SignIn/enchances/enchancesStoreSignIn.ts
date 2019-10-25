import { connect } from 'react-redux';
import { AppState } from 'store';
import { setSignInInput, toggleConfirmedAgreement, signIn } from '../actions';

const mapStateToProps = ({
  signIn: { error, login, password, confirmedAgreement, shouldChangePassword }
}: AppState) => ({
  error,
  login,
  password,
  confirmedAgreement
});
const mapDispatchToProps = { setSignInInput, toggleConfirmedAgreement, signIn };

export const enhanceStoreSignIn = connect(
  mapStateToProps,
  mapDispatchToProps
);
