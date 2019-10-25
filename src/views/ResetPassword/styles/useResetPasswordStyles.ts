import { makeStyles } from '@material-ui/core/styles';
import { ERROR_COLOR, WHITE_TRANSPARENT } from 'const';

export const useResetPasswordStyles = makeStyles(theme => ({
  form: {
    marginTop: '-10rem',
    height: '100vh'
  },

  content: {
    backgroundColor: WHITE_TRANSPARENT,
    padding: '30px 20px',
    boxShadow: `0px 0px 40px 0px ${WHITE_TRANSPARENT}`
  },

  avatar: {
    backgroundColor: theme.palette.primary.main,
    height: '7rem',
    width: '7rem',
    margin: '1rem 0'
  },

  titleText: {
    marginBottom: '30px'
  },

  input: {
    margin: '1rem 0'
  },

  icon: {
    fontSize: '5rem'
  },

  errorMessage: {
    fontSize: '2rem',
    color: ERROR_COLOR,
    textAlign: 'center'
  },

  agreementButton: {
    backgroundColor: ERROR_COLOR
  },

  cancelLink: {
    textDecoration: 'none'
  }
}));
