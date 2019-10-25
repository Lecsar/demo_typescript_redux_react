import { connect } from 'react-redux';
import { AppState } from 'store';
import { setResetPasswordInput, resetPassword } from '../actions';

const mapStateToProps = ({
  resetPassword: { error, newPassword, confirmationNewPassword }
}: AppState) => ({
  error,
  newPassword,
  confirmationNewPassword
});
const mapDispatchToProps = { setResetPasswordInput, resetPassword };

export const enhanceStoreresetPassword = connect(
  mapStateToProps,
  mapDispatchToProps
);

// const mapStateToProps = ({
//   resetPassword: ({ resetPassword: { error, newPassword, confirmationNewPassword }
// }: AppState) => ({
//   error,
//   newPassword,
//   confirmationNewPassword
// });
// const mapDispatchToProps = { setResetPasswordInput, resetPassword };

// export const enhanceStoreresetPassword = connect(
//   mapStateToProps,
//   mapDispatchToProps
// );
