import React from 'react';
import { noop } from 'lodash';
import { Checkbox as BaseCheckbox } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { useCheckboxStyles } from './style';

interface CheckboxProps {
  className?: string;
  checked?: boolean;
  labelText?: string;
  color?: 'primary' | 'secondary' | 'default';
  checkboxRef?: React.Ref<HTMLInputElement>;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
}

export const Checkbox = ({
  className,
  checked,
  labelText = '',
  color = 'primary',
  checkboxRef = null,
  onChange = noop,
  onKeyDown = noop
}: CheckboxProps) => {
  const checkboxClasses = useCheckboxStyles();

  return (
    <FormControlLabel
      classes={{
        ...checkboxClasses,
        root: className
      }}
      control={
        <BaseCheckbox
          inputRef={checkboxRef}
          checked={checked}
          color={color}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
      }
      label={labelText}
    />
  );
};
