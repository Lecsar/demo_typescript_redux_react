import React from 'react';
import cn from 'classnames';
import { Button as BaseButton } from '@material-ui/core';
import { ButtonProps } from '@material-ui/core/Button';
import { useButtonStyles } from './Buttonstyle';

export const Button = ({
  variant = 'contained',
  classes = {},
  ...props
}: ButtonProps) => {
  const buttonClasses = useButtonStyles();

  return (
    <BaseButton
      classes={{ ...buttonClasses, root: cn(buttonClasses.root, classes.root) }}
      variant={variant}
      {...props}
    />
  );
};
