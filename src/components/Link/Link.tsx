import React from 'react';
import { Link as BaseLink } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { useLinkStyles } from './style';

interface LinkProps {
  url?: string;
  linkText?: string;
}

// eslint-disable-next-line no-script-url
const urlMock = 'javascript:void(0);';

export const Link = ({ url = urlMock, linkText = '', ...props }: LinkProps) => {
  const linkClasses = useLinkStyles();

  return (
    <Typography className={linkClasses.root}>
      <BaseLink href={url} {...props}>
        {linkText}
      </BaseLink>
    </Typography>
  );
};
