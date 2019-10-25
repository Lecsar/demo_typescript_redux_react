import React from 'react';
import { List as ListBase } from '@material-ui/core';
import { ListItem } from '..';
// import {useListStyles} from './ListStyles';

interface ListProps<T> {
  options: T[];
  isButton?: boolean;
  hasCheckbox?: boolean;
  onOptionClick?: (o: T, event: React.MouseEvent<any>) => void;
  getOptionKey?: (o: T) => string;
  getOptionLabel?: (o: T) => string;
}

export const List = <T extends {}>({
  options = [],
  getOptionKey = (o: any) => o._id,
  getOptionLabel = (o: any) => o.name
}: ListProps<T>) => {
  // const s = useListStyles();

  return (
    <ListBase>
      {options.map(option => (
        <ListItem key={getOptionKey(option)} label={getOptionLabel(option)} />
      ))}
    </ListBase>
  );
};
