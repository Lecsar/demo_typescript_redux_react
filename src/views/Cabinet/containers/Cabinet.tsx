import React, { useEffect, useState, useCallback } from 'react';
import { TypeOfConnect } from 'typings';
import { enhanceStoreCabinet } from '../enhances';
import { Button } from 'components';
import ButtonBase from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Grid, Typography } from '@material-ui/core';
import { CabinetHeader } from '../components/CabinetHeader';
import { TemplatesList } from '../components/TemplatesList';
import { useCabinetStyles } from '../styles/CabinetStyles';

type BaseFormProps = TypeOfConnect<typeof enhanceStoreCabinet>;

const BaseCabinet = ({
  templates,
  loadTemplatesList,
  logout
}: BaseFormProps) => {
  useEffect(() => {
    loadTemplatesList();
  }, [loadTemplatesList]);

  const [openLogoutConfirm, setOpenLogoutConfirm] = useState(false);

  const toogleOpenLogoutConfirm = useCallback(
    (isOpen: boolean) => () => setOpenLogoutConfirm(isOpen),
    []
  );
  // TODO: timeout session functionality
  // const [signoutTime, setSignoutTime] = useState(1200000);
  // const [warningTime, setWarningTime] = useState(1000000);
  // let warnTimeout: any;
  // let logoutTimeout: any;

  // const warn = () => {
  //   console.log('Warning');
  // };
  // const logoutSession = () => {
  //   console.log('You have been loged out');
  //   onClickLogout();
  // };

  // const destroy = () => {
  //   console.log('Session destroyed');
  // };
  // const setTimeouts = () => {
  //   warnTimeout = setTimeout(warn, warningTime);
  //   logoutTimeout = setTimeout(logoutSession, signoutTime);
  // };

  // const clearTimeouts = () => {
  //   if (warnTimeout) clearTimeout(warnTimeout);
  //   if (logoutTimeout) clearTimeout(logoutTimeout);
  // };

  // useEffect(() => {
  //   const events = [
  //     'load',
  //     'mousemove',
  //     'mousedown',
  //     'click',
  //     'scroll',
  //     'keypress'
  //   ];

  //   const resetTimeout = () => {
  //     clearTimeouts();
  //     setTimeouts();
  //   };

  //   for (let i in events) {
  //     window.addEventListener(events[i], resetTimeout);
  //   }

  //   setTimeouts();
  //   return () => {
  //     for (let i in events) {
  //       window.removeEventListener(events[i], resetTimeout);
  //       clearTimeouts();
  //     }
  //   };
  // }, []);

  const s = useCabinetStyles();

  return (
    <Grid container direction="row" justify="center">
      <CabinetHeader
        leftElement={
          <Grid container direction="row">
            <Grid>
              <Typography className={s.logoText} variant="h5">
                TEST
              </Typography>
              <Typography variant="body2">
                TEST
              </Typography>
              <Typography variant="body2">
                TEST
              </Typography>
            </Grid>
            <img
              className={s.logoImg}
              src={process.env.PUBLIC_URL + '/img/logo-magistral.png'}
              alt="logo"
              height="60"
              width="75"
            />
          </Grid>
        }
        centerElement={
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Typography variant="h4">
            Форма сбора начальной транзакционной информации
            </Typography>
            <Typography variant="h4">по проекту компании ООО «Магистраль северной столицы»</Typography>
          </Grid>
        }
        rightElement={
          <Grid>
            {/* TODO: to separate container */}
            <Button
              classes={{ root: s.logoutBtn }}
              variant="outlined"
              onClick={toogleOpenLogoutConfirm(true)}
            >
              Выйти
            </Button>
          </Grid>
        }
      />
      <Dialog
        fullWidth
        maxWidth="xs"
        open={openLogoutConfirm}
        onClose={toogleOpenLogoutConfirm(false)}
        classes={{ container: s.confirmDialog }}
      >
        <DialogTitle id="responsive-dialog-title">
          <span className={s.confirmDialogTitle}>
            Подтверждение выхода из системы
          </span>
        </DialogTitle>
        <DialogContent>
          <DialogContentText classes={{ root: s.confirmDialogText }}>
            Вы уверены, что хотите выйти?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <ButtonBase
            classes={{ root: s.confirmDialogCancelBtn }}
            onClick={toogleOpenLogoutConfirm(false)}
          >
            Отмена
          </ButtonBase>
          <ButtonBase
            classes={{ root: s.confirmDialogExitButton }}
            onClick={logout}
            color="primary"
            autoFocus
          >
            Выйти
          </ButtonBase>
        </DialogActions>
      </Dialog>
      <Grid
        component="section"
        item
        container
        direction="column"
        justify="center"
        alignItems="center"
        xs={8}
        wrap="nowrap"
        className={s.section}
      >
        <Typography variant="h4">
          {templates.length
            ? 'Выберите стадию проекта для предварительной оценки:'
            : 'Нет информационных запросов'}
        </Typography>
        <TemplatesList templates={templates} />
      </Grid>
    </Grid>
  );
};

export const Cabinet = enhanceStoreCabinet(BaseCabinet);
