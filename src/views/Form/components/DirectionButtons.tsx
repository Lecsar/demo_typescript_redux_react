import React from 'react';
import { Grid } from '@material-ui/core';

import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { Button } from 'components';

interface DirectionButtonsProps {
  isFirstTab: boolean;
  isLastTab: boolean;
  hasErrorsOnCurrentTab: boolean;
  changePage: (direction: -1 | 1) => () => void;
  onClickSaveLastPage: any; //TODO change type
}

export const DirectionButtons = ({
  isFirstTab,
  isLastTab,
  hasErrorsOnCurrentTab,
  onClickSaveLastPage,
  changePage
}: DirectionButtonsProps) => (
  <Grid container justify="space-between">
    {!isFirstTab ? (
      <Button
        color="default"
        disabled={hasErrorsOnCurrentTab}
        onClick={changePage(-1)}
      >
        <NavigateBeforeIcon></NavigateBeforeIcon>
        Назад
      </Button>
    ) : (
      <Grid />
    )}
    {isLastTab && !hasErrorsOnCurrentTab ? (
      <Button onClick={onClickSaveLastPage} color="primary">
        Завершить
      </Button>
    ) : (
      false
    )}
    {!isLastTab ? (
      <Button
        disabled={hasErrorsOnCurrentTab}
        color="default"
        onClick={changePage(+1)}
      >
        Вперёд
        <NavigateNextIcon></NavigateNextIcon>
      </Button>
    ) : (
      false
    )}
  </Grid>
);
