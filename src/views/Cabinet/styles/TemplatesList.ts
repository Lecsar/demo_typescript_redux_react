import { makeStyles } from '@material-ui/styles';

export const useTempatesListStyles = makeStyles({
  template: {
    textTransform: 'initial',
    width: '400px',
    height: '150px',
    margin: '20px',
    fontSize: '1.7rem',
    padding: 0
  },

  link: {
    textDecoration: 'none',
    color: 'black',
    padding: 0,
    width: '100%',
    display: 'flex',
    height: '150px',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  }
});
