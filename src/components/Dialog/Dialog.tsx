import React, { useState, useEffect } from 'react';
import { Dialog as BaseDialog, Grid } from '@material-ui/core';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Button } from '../Button/Button';
import { useDialogStyles } from './style';

interface DialogProps {
  titleText?: string;
  contentText?: string;
  closeButtonText?: string;
  isOpen: boolean;
}

export const Dialog = ({
  titleText = '',
  contentText = '',
  closeButtonText = '',
  isOpen,
  ...props
}: DialogProps) => {
  const style = useDialogStyles();

  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    setOpenDialog(isOpen);
  }, [isOpen]);

  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <Grid item className={style.root}>
      <BaseDialog
        open={openDialog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{titleText}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <span className={style.contentLabel}>{contentText}</span>
          </DialogContentText>
        </DialogContent>
        <DialogActions className={style.actions}>
          <Button onClick={handleClose} color="default">
            {closeButtonText}
          </Button>
        </DialogActions>
      </BaseDialog>
    </Grid>
  );
};
