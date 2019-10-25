import React from 'react';
import cn from 'classnames';
import { useIconStyles } from './IconStyle';
import {
  Check,
  Error,
  GetApp,
  Delete,
  Save,
  Menu,
  ArrowBack
} from '@material-ui/icons';
import { CircularProgress } from '@material-ui/core';

export enum IconType {
  check,
  spinner,
  error,
  download,
  delete,
  save,
  menu,
  arrowBack
}

interface IconProps {
  type: IconType;
  iconClassName?: string;
  onClick?: (e: any) => void;
}

export const Icon = ({ iconClassName, type, onClick }: IconProps) => {
  const s = useIconStyles();

  switch (type) {
    case IconType.check:
      return (
        <Check
          className={cn(s.icon, s.check, iconClassName)}
          onClick={onClick}
        />
      );
    case IconType.spinner:
      return <CircularProgress size={25} />;
    case IconType.error:
      return (
        <Error
          className={cn(s.icon, s.error, iconClassName)}
          onClick={onClick}
        />
      );
    case IconType.download:
      return (
        <GetApp
          className={cn(s.icon, s.download, iconClassName)}
          onClick={onClick}
        />
      );
    case IconType.delete:
      return (
        <Delete
          className={cn(s.icon, s.delete, iconClassName)}
          onClick={onClick}
        />
      );
    case IconType.save:
      return (
        <Save className={cn(s.icon, s.save, iconClassName)} onClick={onClick} />
      );
    case IconType.menu:
      return (
        <Menu className={cn(s.icon, s.menu, iconClassName)} onClick={onClick} />
      );
    case IconType.arrowBack:
      return (
        <ArrowBack className={cn(s.icon, iconClassName)} onClick={onClick} />
      );
    default:
      console.error('Неизвестный IconType');
      return null;
  }
};
