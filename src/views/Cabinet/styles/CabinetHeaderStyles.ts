import { makeStyles } from '@material-ui/styles';

export const useCabinetStyles = makeStyles({
  appbar: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 5px 0 15px',
    height: '75px'
  },

  toolbar: {
    padding: 0
  },

  toolbarCenter: {
    width: '100%',
    padding: 0
  }
});
