import { makeStyles, createStyles } from '@material-ui/core';
import { ERROR_COLOR, BLACK } from 'const';

export const useInputStyles = makeStyles(
  createStyles({
    inputWrapper: {},

    label: {
      color: `${BLACK}`,
      fontSize: '1.7rem'
    },

    errorMessage: {
      color: ERROR_COLOR,
      fontSize: '1.5rem'
    },

    inputBlock: {
      width: '100%',
      minHeight: 50
    },

    input: {
      fontSize: '2rem'
    }
  })
);
