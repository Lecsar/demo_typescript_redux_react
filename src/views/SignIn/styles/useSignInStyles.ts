import { makeStyles } from '@material-ui/core/styles';
import { ERROR_COLOR, WHITE, DARK_RED, WHITE_TRANSPARENT } from 'const';

export const useSignInStyles = makeStyles(theme => ({
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
    width: '100%',
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
    backgroundColor: WHITE,
    width: '100%',
    padding: '0',
    fontSize: '1.2rem',
    textTransform: 'lowercase',
    boxShadow: 'none'
  },

  agreementCheckboxGrid: {
    paddingRight: '0'
  },

  agreementButtonGrid: {
    paddingLeft: '0'
  },

  agreementText: {
    whiteSpace: 'pre-wrap',
    fontSize: '1.3rem'
  },

  agreementTextTitle: {
    textAlign: 'center'
  },

  agreementTextTitleContent: {
    fontSize: '1.8rem'
  },

  agreementTextFooter: {
    justifyContent: 'space-around'
  },

  disclaimerContainer: {
    justifyContent: 'space-around',
    margin: '10px 0 15px 0'
  },

  formDisclaimerCheckbox: {
    fontSize: '1.4rem',
    justifyContent: 'flex-start',
    marginRight: 0
  },

  formDisclaimerLink: {
    fontSize: '1.3rem',
    cursor: 'pointer',
    color: DARK_RED,
    textDecoration: 'underline',
    marginLeft: '25px',
    verticalAlign: 'middle',
    display: 'inline-flex',
    alignItems: 'center'
  }
}));
