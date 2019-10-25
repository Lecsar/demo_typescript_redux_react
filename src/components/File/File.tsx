import React from 'react';
import moment from 'moment';
import { Grid } from '@material-ui/core';
import { FileData } from 'views/Form/typings';
import { ListItem } from 'components';
import { IconType, Icon } from 'components';
import { ADRESS, DEFAULT_DATE_FORMAT } from 'const';

interface FileProps extends Omit<FileData, '_id'> {
  onDelete?: () => void;
}

export const File = ({
  name,
  author = '',
  createAt = '',
  path = '',
  error = false,
  isLoading = false,
  onDelete
}: FileProps) => {
  const getIconsBasedStatus = (error: boolean, isLoading: boolean) => {
    if (isLoading) {
      return <Icon type={IconType.spinner} />;
    }

    if (error) {
      return <Icon type={IconType.error} />;
    }

    return (
      <>
        <a href={encodeURI(`${ADRESS}:3000/${path}`)} download>
          <Icon type={IconType.download} />
        </a>
        <Icon type={IconType.delete} onClick={onDelete} />
      </>
    );
  };

  return (
    <Grid container alignItems="center">
      <Grid item>
        <ListItem
          label={`${name} ${author} ${
            createAt ? moment(createAt).format(DEFAULT_DATE_FORMAT) : ''
          }`}
        />
      </Grid>
      <Grid item>{getIconsBasedStatus(error, isLoading)}</Grid>
    </Grid>
  );
};
