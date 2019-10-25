import { makeStyles } from '@material-ui/styles';
import { WHITE } from 'const';

const fontSize = '1.5rem';
const padding = '1rem';

export const useCabinetStyles = makeStyles({
  header: {
    fontSize: '3rem',
    textAlign: 'center',
    margin: '1rem 0'
  },

  logoutBtn: {
    margin: '0 0 0 30px',
    padding,
    minWidth: 0,
    border: 0,
    color: WHITE,
    fontSize: fontSize
  },

  confirmDialog: {},

  confirmDialogTitle: {
    fontSize: '1.7rem'
  },

  confirmDialogText: {
    fontSize: '1.5rem'
  },

  confirmDialogCancelBtn: {
    fontSize: '1.5rem'
  },

  confirmDialogExitButton: {
    fontSize: '1.5rem'
  },

  section: {
    backgroundColor: '#d6d6d6',
    overflowY: 'auto',
    height: 'calc(100vh - 90px)',
    padding: '30px',
    textAlign: 'center'
  },

  logoText: {
    fontWeight: 900,
    fontSize: '1.6rem'
  },

  logoImg: {
    marginLeft: '25px'
  }
});
