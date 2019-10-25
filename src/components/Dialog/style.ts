import { makeStyles } from '@material-ui/core';

export const useDialogStyles = makeStyles({
  root: {
    fontSize: '2rem',
    margin: '10px 0'
  },

  contentLabel: {
    whiteSpace: 'pre-wrap'
  },

  actions: {
    justifyContent: 'center'
  }
});
