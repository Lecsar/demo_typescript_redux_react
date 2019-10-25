import React, { useCallback, useRef } from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import { SIGN_IN_PAGE } from 'router';
import { Avatar, Grid, Typography } from '@material-ui/core';
import SecurityOutlinedIcon from '@material-ui/icons/SecurityOutlined';
import { ControlInput, Button } from 'components';
import { ENTER_KEY_CODE } from 'const';
import { TypeOfConnect } from 'typings';
import { enhanceStoreresetPassword } from '../enchances';
import { ResetPasswordFieldName } from '../typings';
import { useResetPasswordStyles } from '../styles/useResetPasswordStyles';

type resetPasswordProps = TypeOfConnect<typeof enhanceStoreresetPassword> &
  RouteComponentProps;

export const ResetPasswordBase = ({
  error,
  newPassword,
  confirmationNewPassword,
  setResetPasswordInput,
  resetPassword
}: resetPasswordProps) => {
  const confirmationNewPasswordRef = useRef<HTMLInputElement>(null);

  const focusOnPassword = useCallback(() => {
    if (confirmationNewPasswordRef && confirmationNewPasswordRef.current) {
      confirmationNewPasswordRef.current.focus();
    }
  }, []);

  const onKeyDownInput = (enterAction: () => void) => ({
    keyCode
  }: React.KeyboardEvent<HTMLInputElement>) => {
    switch (keyCode) {
      case ENTER_KEY_CODE:
        enterAction();
        break;
    }
  };

  const setInputValue = useCallback(
    (fieldName: ResetPasswordFieldName) => ({
      target: { value }
    }: React.ChangeEvent<HTMLInputElement>) =>
      setResetPasswordInput({ fieldName, value }),
    [setResetPasswordInput]
  );

  const isDisabledResetPasswordBtn =
    !(newPassword && confirmationNewPassword) ||
    newPassword !== confirmationNewPassword;

  const s = useResetPasswordStyles();

  return (
    <Grid
      className={s.form}
      container
      item
      xs={12}
      justify="center"
      alignItems="center"
    >
      <Grid
        item
        container
        direction="column"
        className={s.content}
        xs={4}
        alignItems="center"
      >
        <Avatar className={s.avatar}>
          <SecurityOutlinedIcon classes={{ root: s.icon }} />
        </Avatar>
        <Typography className={s.titleText} component="h1" variant="h3">
          Смена пароля
        </Typography>
        <Grid component="form" item container direction="column" xs={10}>
          <ControlInput
            id="newPassword"
            name="newPassword"
            label="Новый пароль"
            controlInputClassName={s.input}
            placeholder="Введите новый пароль"
            autoComplete="newPassword"
            type="password"
            autoFocus
            value={newPassword}
            onChange={setInputValue(ResetPasswordFieldName.newPassword)}
            onKeyDown={onKeyDownInput(focusOnPassword)}
          />
          <ControlInput
            id="confirmationNewPassword"
            name="confirmationNewPassword"
            label="Подтвердите новый пароль"
            controlInputClassName={s.input}
            placeholder="Подтвердите новый пароль"
            autoComplete="confirmationNewPassword"
            type="password"
            value={confirmationNewPassword}
            inputRef={confirmationNewPasswordRef}
            onChange={setInputValue(
              ResetPasswordFieldName.confirmationNewPassword
            )}
            onKeyDown={onKeyDownInput(resetPassword)}
          />
          {error && (
            <Typography className={s.errorMessage} component="h3" variant="h3">
              {error}
            </Typography>
          )}
          <Button
            disabled={isDisabledResetPasswordBtn}
            color="primary"
            onClick={resetPassword}
          >
            Сменить пароль
          </Button>
          <Link className={s.cancelLink} to={SIGN_IN_PAGE}>
            <Button variant="outlined" fullWidth>
              Отмена
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};

export const ResetPassword = enhanceStoreresetPassword(ResetPasswordBase);
