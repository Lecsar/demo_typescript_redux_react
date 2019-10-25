import React from 'react';
import { AppBar, Toolbar, Grid } from '@material-ui/core';
import { useCabinetStyles } from '../styles/CabinetHeaderStyles';

interface CabinetHeaderProps {
  leftElement?: JSX.Element;
  centerElement?: JSX.Element;
  rightElement?: JSX.Element;
}

export const CabinetHeader = ({
  leftElement,
  rightElement,
  centerElement
}: CabinetHeaderProps) => {
  const s = useCabinetStyles();

  return (
    <AppBar className={s.appbar} position="static">
      <Grid container item xs={12}>
        <Grid container item xs={2} justify="flex-start">
          <Toolbar className={s.toolbar}>{leftElement}</Toolbar>
        </Grid>
        <Grid container item xs={8} justify="center">
          <Toolbar className={s.toolbarCenter}>{centerElement}</Toolbar>
        </Grid>
        <Grid container item xs={2} justify="flex-end">
          <Toolbar className={s.toolbar}>{rightElement}</Toolbar>
        </Grid>
      </Grid>
    </AppBar>
  );
};
