import React, { useCallback } from 'react';
import { Grid, Select, FormLabel, MenuItem } from '@material-ui/core';
import { SelectProps } from '@material-ui/core/Select';
import { apiHandbooks } from 'api';
import { useControlSelectStyles } from './ControlSelectStyles';
import { usePromise } from 'utils/makeCancelable';

export interface ControlSelectProps<T>
  extends Omit<SelectProps, 'error' | 'id'> {
  _id: string;
  label?: string;
  error?: boolean | string;
  options?: T[];
  handbookId?: string;
  getOptionKey?: (option: T) => string;
  getOptionName?: (option: T) => string;
  getOptionValue?: (option: T) => string;
}

const DEFAULT_OPTIONS: any[] = [];

export const ControlSelect = <T extends {}>({
  _id,
  label = '',
  error = false,
  value,
  disabled = false,
  handbookId = '',
  getOptionKey = (o: any) => o._id,
  getOptionName = (o: any) => o.name,
  getOptionValue = (o: any) => o.value,
  ...props
}: ControlSelectProps<T>) => {
  const s = useControlSelectStyles();
  const loadOptions = useCallback(
    () =>
      handbookId
        ? apiHandbooks.getHandbook(handbookId)
        : Promise.resolve(props.options || DEFAULT_OPTIONS),
    [handbookId, props.options]
  );
  const { value: options, isLoading, errorInPromise } = usePromise<T[]>(
    loadOptions,
    DEFAULT_OPTIONS
  );

  const isSelectDisable = isLoading || errorInPromise || disabled;

  return (
    <Grid item className={s.item} container direction="column" xs={12}>
      <FormLabel className={s.label}>{label}</FormLabel>
      <Select
        MenuProps={{
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left'
          },
          transformOrigin: {
            vertical: 'top',
            horizontal: 'left'
          },
          getContentAnchorEl: null
        }}
        className={s.select}
        classes={{ root: s.root, icon: s.icon }}
        value={value}
        error={!!error}
        disabled={isSelectDisable}
        {...props}
      >
        {options.map(option => (
          <MenuItem
            key={getOptionKey(option)}
            classes={{ root: s.option }}
            value={getOptionValue(option)}
          >
            {getOptionName(option)}
          </MenuItem>
        ))}
      </Select>
      {error && <FormLabel className={s.errorMessage}>{error}</FormLabel>}
    </Grid>
  );
};
