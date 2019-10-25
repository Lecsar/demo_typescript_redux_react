import React from 'react';
import {
  ListItem as ListItemBase,
  Checkbox,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import { useListItemStyles } from './ListItemStyles';

interface ListItemProps {
  label: string;
  hasCheckbox?: boolean;
}

export const ListItem = ({ label, hasCheckbox = false }: ListItemProps) => {
  const s = useListItemStyles();

  return (
    <ListItemBase dense>
      {hasCheckbox && (
        <ListItemIcon>
          <Checkbox
            edge="start"
            // classes={{root: }}
            // checked={checked.indexOf(value) !== -1}
            tabIndex={-1}
            // disableRipple
            // inputProps={{'aria-labelledby': labelId}}
          />
        </ListItemIcon>
      )}
      <ListItemText
        className={s.text}
        classes={{ primary: s.primary }}
        primary={label}
      />
    </ListItemBase>
  );
};
