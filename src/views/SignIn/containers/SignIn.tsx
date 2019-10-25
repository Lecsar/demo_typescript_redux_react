import React, { useCallback, createRef, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { Avatar, Grid, Typography } from '@material-ui/core';

import ButtonBase from '@material-ui/core/Button';
import DialogBase from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useToggle } from 'hooks';
import { ControlInput, Button, Checkbox } from 'components';
import { ENTER_KEY_CODE, AGREEMENT_TEXT } from 'const';
import { TypeOfConnect } from 'typings';
import { enhanceStoreSignIn } from '../enchances';
import { SignInFieldName } from '../typings';
import { useSignInStyles } from '../styles/useSignInStyles';

type SignInProps = TypeOfConnect<typeof enhanceStoreSignIn> &
  RouteComponentProps;

interface SignInBaseRefs {
  login: React.RefObject<HTMLInputElement>;
  password: React.RefObject<HTMLInputElement>;
  agreement: React.RefObject<HTMLInputElement>;
}

const refs: SignInBaseRefs = {
  login: createRef<HTMLInputElement>(),
  password: createRef<HTMLInputElement>(),
  agreement: createRef<HTMLInputElement>()
};

const focus = (elementName: keyof SignInBaseRefs) => () => {
  const ref = refs[elementName];

  if (ref && ref.current) {
    ref.current.focus();
  }
};

const focusOnPassword = focus('password');
const focusOnLogin = focus('login');
const focusOnAgreementCheckbox = focus('agreement');

export const SignInBase = ({
  login,
  password,
  confirmedAgreement,
  error,
  setSignInInput,
  toggleConfirmedAgreement,
  signIn
}: SignInProps) => {
  const [isAgreementShow, toggleIsAgreementShow] = useToggle(false);

  // аналог componentDidMount, для определения начального фокуса на странице
  useEffect(() => {
    const isRedirectFromResetPage = login && !password && confirmedAgreement;
    isRedirectFromResetPage ? focusOnPassword() : focusOnLogin();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!password && error) {
      focusOnPassword();
    }
  }, [password, error]);

  const onKeyDownInput = useCallback(
    (enterAction: () => void) => ({
      keyCode
    }: React.KeyboardEvent<HTMLInputElement>) => {
      switch (keyCode) {
        case ENTER_KEY_CODE:
          enterAction();
          break;
      }
    },
    []
  );

  const setInputValue = useCallback(
    (fieldName: SignInFieldName) => ({
      target: { value }
    }: React.ChangeEvent<HTMLInputElement>) =>
      setSignInInput({ fieldName, value }),
    [setSignInInput]
  );

  const isDisableSignInBtn = !(login && password && confirmedAgreement);

  const onSignIn = useCallback(() => {
    if (!isDisableSignInBtn) {
      signIn();
    }
  }, [signIn, isDisableSignInBtn]);

  const onKeyDownEnterInPassword = confirmedAgreement
    ? onSignIn
    : focusOnAgreementCheckbox;

  const onPushEnterAgreementCheckBox = useCallback(
    ({ keyCode }: React.KeyboardEvent<HTMLButtonElement>) => {
      if (keyCode === ENTER_KEY_CODE) {
        toggleConfirmedAgreement();
      }
    },
    [toggleConfirmedAgreement]
  );

  const s = useSignInStyles();

  return (
    <Grid
      className={s.form}
      container
      item
      xs={12}
      justify="center"
      alignItems="center"
    >
      <DialogBase
        fullWidth
        maxWidth="md"
        open={isAgreementShow}
        onClose={toggleIsAgreementShow}
      >
        <DialogTitle className={s.agreementTextTitle}>
          <span className={s.agreementTextTitleContent}>
            Пользовательское соглашение на использование системы
          </span>
        </DialogTitle>
        <DialogContent>
          <DialogContentText className={s.agreementText}>
            {AGREEMENT_TEXT}
          </DialogContentText>
        </DialogContent>
        <DialogActions className={s.agreementTextFooter}>
          <ButtonBase variant="contained" onClick={toggleIsAgreementShow}>
            Закрыть
          </ButtonBase>
        </DialogActions>
      </DialogBase>
      <Grid
        item
        container
        direction="column"
        className={s.content}
        xs={4}
        alignItems="center"
      >
        <Avatar className={s.avatar}>
          {/* <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="124"
              height="32"
              viewBox="0 0 124 32"
            >
              <path d="M110.385,31l-1.571-4H98l-1.6,4H86.964L99.205,1h8.714L120.2,31h-9.819Zm-4.8-12.443-2.168-7.075-2.21,7.075-0.447,1.364h5.287ZM80,21H75L74.984,31h-9V1H80a10.691,10.691,0,0,1,7.711,2.9A9.233,9.233,0,0,1,91,11a8.846,8.846,0,0,1-3.289,6.877A10.834,10.834,0,0,1,80,21ZM79,8H74.984v6H79a2.916,2.916,0,0,0,3-3A2.942,2.942,0,0,0,79,8ZM54,31L44,18,43.984,31h-9V1h9L44,13,52,1H63L53,15,65,31H54ZM22.813,27H12l-1.6,4H0.963L13.205,1h8.714L34.2,31H24.385Zm-3.232-8.445-2.168-7.075L15.2,18.555,14.756,19.92h5.287Z"></path>
            </svg>
          </div> */}
          <LockOutlinedIcon classes={{ root: s.icon }} />
        </Avatar>
        <Typography className={s.titleText} component="h1" variant="h3">
          Авторизация
        </Typography>
        <Grid component="form" item container direction="column" xs={10}>
          <ControlInput
            id="login"
            name="login"
            label="Логин"
            controlInputClassName={s.input}
            placeholder="Введите логин..."
            autoComplete="login"
            value={login}
            inputRef={refs.login}
            onChange={setInputValue(SignInFieldName.login)}
            onKeyDown={onKeyDownInput(focusOnPassword)}
          />
          <ControlInput
            id="password"
            name="password"
            label="Пароль"
            controlInputClassName={s.input}
            placeholder="Введите пароль..."
            autoComplete="password"
            type="password"
            value={password}
            inputRef={refs.password}
            onChange={setInputValue(SignInFieldName.password)}
            onKeyDown={onKeyDownInput(onKeyDownEnterInPassword)}
          />
          {error && (
            <Typography className={s.errorMessage} component="h3" variant="h3">
              {error}
            </Typography>
          )}
          <Grid
            container
            item
            spacing={0}
            sm={12}
            className={s.disclaimerContainer}
          >
            <Checkbox
              className={s.formDisclaimerCheckbox}
              checkboxRef={refs.agreement}
              checked={confirmedAgreement}
              labelText="Нажимая 'Войти', Вы соглашаетесь с условиями"
              onChange={toggleConfirmedAgreement}
              onKeyDown={onPushEnterAgreementCheckBox}
            />
            <Typography
              className={s.formDisclaimerLink}
              onClick={toggleIsAgreementShow}
            >
              пользовательского соглашения
            </Typography>
          </Grid>
          <Button
            disabled={isDisableSignInBtn}
            color="primary"
            onClick={onSignIn}
          >
            Войти
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export const SignIn = enhanceStoreSignIn(SignInBase);
