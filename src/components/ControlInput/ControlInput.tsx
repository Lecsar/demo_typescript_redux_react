import React from 'react';
import { Input as BaseInput, Grid } from '@material-ui/core';
import { InputProps } from '@material-ui/core/Input';
import FormLabel from '@material-ui/core/FormLabel';
import { useInputStyles } from './style';
interface ControlInputProps extends Omit<InputProps, 'error'> {
  controlInputClassName?: string;
  label?: string;
  error?: boolean | string;
}

export const ControlInput = ({
  label = '',
  error = false,
  id,
  controlInputClassName,
  ...props
}: ControlInputProps) => {
  const s = useInputStyles();
  const htmlId = `${label}-${id}`;

  return (
    <Grid item className={controlInputClassName} container>
      <FormLabel className={s.label} htmlFor={htmlId}>
        {label}
      </FormLabel>
      <BaseInput
        className={s.inputBlock}
        classes={{ input: s.input }}
        id={htmlId}
        error={!!error}
        {...props}
      />
      {error && <FormLabel className={s.errorMessage}>{error}</FormLabel>}
    </Grid>
  );
};
