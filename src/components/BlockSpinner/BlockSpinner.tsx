import React from 'react';
import useStyles from './style';
import { Grid, CircularProgress, Typography } from '@material-ui/core';

interface BlockSpinnerProps {
  errorMessage?: string | boolean;
}

export const BlockSpinner = ({ errorMessage }: BlockSpinnerProps) => {
  const s = useStyles();

  return (
    <Grid container className={s.block} justify="center" alignItems="center">
      {errorMessage && <Typography variant="h3">{errorMessage}</Typography>}
      <CircularProgress size={100} />
    </Grid>
  );
};
