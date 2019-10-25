import React, { useCallback, useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';

import { Grid, Typography } from '@material-ui/core';
import ButtonBase from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TypeOfConnect } from 'typings';
import { useToggle } from 'hooks';
import { Button, Icon, IconType } from 'components';
import { CabinetHeader } from 'views/Cabinet/components/CabinetHeader';
import { DirectionButtons } from '../components/DirectionButtons';
import { FormTabs } from './FormTabs';
import { FormFields } from './FormFields';
import { enhanceStoreForm } from '../enhances';
import { useFormStyles } from '../styles';

type BaseFormProps = TypeOfConnect<typeof enhanceStoreForm> &
  RouteComponentProps<{ templateId: string }>;

const BaseForm = ({
  error,
  tabIndex,
  tabs,
  templateName,
  // fieldsData,
  allFieldsForSave,
  saveTabData,
  logout,
  loadTemplate,
  hasErrorsOnCurrentTab,
  setTabIdWithValidate,
  validateTabFields,
  // calculateRating,
  match
}: BaseFormProps) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [openLogoutConfirm, toggleLogoutConfirm] = useToggle(false);
  const [openFinishConfirm, setOpenFinishConfirm] = useState(false);

  useEffect(() => {
    loadTemplate(match.params.templateId);
  }, [loadTemplate, match.params.templateId]);

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

  const amountTabs = tabs.length;
  const isFirstTab = tabIndex <= 0;
  const isLastTab = tabIndex === amountTabs - 1;

  const openDrawer = useCallback(() => {
    validateTabFields();
    setDrawerOpen(true);
  }, [validateTabFields]);

  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  const onClickSave = useCallback(() => saveTabData(allFieldsForSave), [
    saveTabData,
    allFieldsForSave
  ]);

  const handleClickOpenConfirmFinish = useCallback(() => {
    onClickSave();
    setOpenFinishConfirm(true);
  }, [onClickSave]);

  const handleCloseConfirmFinish = useCallback(() => {
    setOpenFinishConfirm(false);
  }, []);

  const changePage = useCallback(
    (direction: -1 | 1) => () => {
      if (isLastTab) {
        validateTabFields();
      }

      //TODO: save all fields call everytime
      onClickSave();
      setTabIdWithValidate(tabIndex, direction);
    },
    [tabIndex, isLastTab, setTabIdWithValidate, onClickSave, validateTabFields]
  );

  const s = useFormStyles();

  return (
    <Grid component="main" container direction="row" justify="center">
      <FormTabs isDrawerOpen={isDrawerOpen} closeDrawer={closeDrawer} />
      <CabinetHeader
        leftElement={
          <Grid container direction="row">
            <Grid>
              <Typography className={s.logoText} variant="h5">
                TESt
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
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Typography variant="h4" className={s.templateNameText}>
              {templateName}
            </Typography>
            <Grid>
              <Button
                classes={{ root: s.btn }}
                variant="outlined"
                onClick={onClickSave}
              >
                Сохранить
                {/* <Icon type={IconType.save} /> */}
              </Button>
              <Button
                classes={{ root: s.btn }}
                variant="outlined"
                onClick={openDrawer}
              >
                <span className={s.counter}>{`${tabIndex +
                  1}/${amountTabs}`}</span>
                <Icon type={IconType.menu} />
              </Button>
            </Grid>
          </Grid>
        }
        rightElement={
          <Grid>
            {/* TODO: to separate container */}

            <Button classes={{ root: s.linkBtn }} variant="outlined">
              <Link className={s.link} to="/">
                {/* <Icon type={IconType.arrowBack} /> */}
                На главную
              </Link>
            </Button>
            <Button
              classes={{ root: s.logoutBtn }}
              variant="outlined"
              onClick={toggleLogoutConfirm}
            >
              Выйти
            </Button>
          </Grid>
        }
      />
      <Dialog
        fullWidth
        maxWidth="xs"
        open={openFinishConfirm}
        onClose={handleCloseConfirmFinish}
        classes={{ container: s.confirmDialog }}
      >
        <DialogTitle id="responsive-dialog-title">
          <span className={s.confirmDialogTitle}>Данные сохранены</span>
        </DialogTitle>
        <DialogContent classes={{ root: s.confirmDialogText }}>
          <DialogContentText classes={{ root: s.confirmDialogText }}>
            Спасибо за успешное заполнение формы для сбора начальной
            транзакционной информации.
          </DialogContentText>
          <DialogContentText classes={{ root: s.confirmDialogText }}>
            В ближайшее время на Ваш адрес будет выслано электронное письмо.
          </DialogContentText>
          <DialogContentText classes={{ root: s.confirmDialogText }}>
            Письмо будет содержать индикативную оценку кредитного качества
            проекта, основанную на указанных Вами данных.
          </DialogContentText>
        </DialogContent>
        <DialogActions classes={{ root: s.confirmFinishActionBar }}>
          <ButtonBase
            color="primary"
            variant="contained"
            classes={{ root: s.confirmDialogCancelBtn }}
            onClick={handleCloseConfirmFinish}
            size="medium"
          >
            <Link className={s.link} to="/">
              На главную
            </Link>
          </ButtonBase>
        </DialogActions>
      </Dialog>
      <Dialog
        fullWidth
        maxWidth="xs"
        open={openLogoutConfirm}
        onClose={toggleLogoutConfirm}
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
            onClick={toggleLogoutConfirm}
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
        className={s.form}
        component="section"
        item
        container
        direction="column"
        xs={8}
        wrap="nowrap"
      >
        <FormFields />
        <DirectionButtons
          isFirstTab={isFirstTab}
          isLastTab={isLastTab}
          changePage={changePage}
          onClickSaveLastPage={handleClickOpenConfirmFinish}
          hasErrorsOnCurrentTab={hasErrorsOnCurrentTab}
        />
      </Grid>
    </Grid>
  );
};

export const Form = enhanceStoreForm(BaseForm);
