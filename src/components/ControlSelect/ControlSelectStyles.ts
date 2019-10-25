import { makeStyles } from '@material-ui/styles';
import { ERROR_COLOR, BLACK, TABLE_ROW_COLOR } from 'const';

export const useControlSelectStyles = makeStyles({
  root: {
    width: '100%',
    fontSize: '1.4rem'
  },

  item: {
    marginBottom: '10px'
  },

  select: {
    width: '100%',
    minHeight: 35
  },

  label: {
    color: `${BLACK}`,
    fontSize: '1.5rem',
    fontWeight: 700
  },

  menuPaper: {
    fontSize: '1rem'
  },

  errorMessage: {
    color: ERROR_COLOR,
    fontSize: '1.2rem',
    marginTop: 5
  },

  icon: {
    fontSize: '2.5rem'
  },

  option: {
    fontSize: '1.2rem',
    lineHeight: '1.5',
    maxWidth: 1220,
    whiteSpace: 'normal',
    '&:nth-child(odd)': {
      backgroundColor: TABLE_ROW_COLOR
    }
  }
});
