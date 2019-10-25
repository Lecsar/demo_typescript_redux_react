import React from 'react';
import { Link } from 'react-router-dom';
import { FORM_PAGE } from 'router';
import { Grid } from '@material-ui/core';
import { Button } from 'components';
import { TemplateInfo } from '../typings';
import { useTempatesListStyles } from '../styles/TemplatesList';

interface TemplatesListProps {
  templates: TemplateInfo[];
}

export const TemplatesList = ({ templates }: TemplatesListProps) => {
  const s = useTempatesListStyles();

  return (
    //TODO: reverse is hack for ordering
    <Grid container direction="column-reverse">
      {templates.map(({ _id, name }) => (
        <Grid item key={_id}>
          <Button
            classes={{ root: s.template }}
            variant="contained"
            size="large"
          >
            <Link className={s.link} to={encodeURI(`${FORM_PAGE}/${_id}`)}>
              {name}
            </Link>
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};
