import { makeStyles } from '@material-ui/styles';
import { ERROR_COLOR, DARK_RED, GREY, BLUE, GREEN, WHITE } from 'const';

export const useIconStyles = makeStyles({
  icon: {
    fontSize: '2.5rem'
  },

  spinner: {
    width: '2rem',
    height: '2rem'
  },

  check: {
    color: GREEN
  },

  error: {
    color: ERROR_COLOR
  },

  download: {
    color: GREY,
    cursor: 'pointer',

    '&:hover': {
      color: BLUE
    }
  },

  delete: {
    color: ERROR_COLOR,
    cursor: 'pointer',

    '&:hover': {
      color: DARK_RED
    }
  },

  save: {
    color: WHITE
  },

  menu: {
    color: WHITE
  }
});
