import { makeStyles } from '@material-ui/core';
import { WHITE, LIGHT_GREY } from 'const';

const fontSize = '1.5rem';
const padding = '1rem';

export const useFormStyles = makeStyles({
  form: {
    flexGrow: 1,
    backgroundColor: LIGHT_GREY,
    overflowY: 'auto',
    height: 'calc(100vh - 90px)',
    padding: '30px'
  },

  calculateBtn: {
    marginRight: '2rem'
  },

  btn: {
    padding,
    minWidth: 0,
    border: 0,
    color: WHITE,
    fontSize: fontSize
  },

  linkBtn: {
    padding: 0,
    margin: 0,
    border: 0
  },

  toMainPageBtn: {
    marginLeft: '5px'
  },

  counter: {
    right: 0,
    top: -5,
    color: WHITE,
    fontSize
  },

  link: {
    display: 'flex',
    alignItems: 'center',
    color: WHITE,
    textDecoration: 'none',
    fontSize,
    cursor: 'pointer',
    padding
  },

  logoutBtn: {
    margin: '0 0 0 35px',
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

  logoText: {
    fontWeight: 900,
    fontSize: '1.6rem'
  },

  completeAllFields: {},

  confirmFinishActionBar: {},

  logoImg: {
    marginLeft: '25px'
  },

  templateNameText: {
    flex: 1,
    textAlign: 'center',
    marginLeft: '230px' // TODO: remove this hack
  }
});
