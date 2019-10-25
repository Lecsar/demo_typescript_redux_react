import { Dispatch } from 'redux';
import { AppState } from 'store';
import {
  SET_FIELD_VALUE,
  VALIDATE_FIELD,
  VALIDATE_TAB_FIELDS,
  SET_ACTIVE_TAB_ID
} from '../const';
// import {TabFormData} from '../typings';
// import {checkOnValidateRules} from '../helpers';
import { find, compose, any } from 'ramda';
import { findTab, getFields, checkValidate } from '../getters';

export const setFieldValue = (fieldId: string, value: string) => ({
  type: SET_FIELD_VALUE,
  fieldId,
  value
});

export const validateField = (fieldId: string) => ({
  type: VALIDATE_FIELD,
  fieldId
});

// export const calculateRating = () => (dispatch: Dispatch, getState: () => AppState) => {
//     const {form} = getState();

//     const isErrorsOnForm = any(
//         compose(
//             any(checkValidate),
//             getFields,
//         ),
//         form.tabs,
//     );

//     if (isErrorsOnForm) {
//         dispatch({type: VALIDATE_ALL_FIELDS});
//     } else {
//         console.log('ОТПРАВИТЬ ДАННЫЕ ДЛЯ ПОДСЧЁТА РЕЙТИНГА');
//     }
// };

export const setTabIdWithValidate = (tabIndex: number, direction: -1 | 1) => (
  dispatch: Dispatch,
  getState: () => AppState
) => {
  const { activeTabId, tabs } = getState().form;

  const hasErrorsOnCurrentTab = compose(
    any(checkValidate),
    getFields,
    find(findTab(activeTabId))
  );

  const nextActiveTabId = tabs[tabIndex + direction]._id;

  if (direction === 1) {
    const isError = hasErrorsOnCurrentTab(tabs);

    if (isError) {
      dispatch({ type: VALIDATE_TAB_FIELDS });
    } else {
      dispatch({ type: SET_ACTIVE_TAB_ID, activeTabId: nextActiveTabId });
    }
  } else {
    dispatch({ type: SET_ACTIVE_TAB_ID, activeTabId: nextActiveTabId });
  }
};

// TODO: create once function for validate
export const validateTabFields = () => (
  dispatch: Dispatch,
  getState: () => AppState
) => {
  const { activeTabId, tabs } = getState().form;

  const hasErrorsOnCurrentTab = compose(
    any(checkValidate),
    getFields,
    find(findTab(activeTabId))
  );

  const isError = hasErrorsOnCurrentTab(tabs);

  if (isError) {
    dispatch({ type: VALIDATE_TAB_FIELDS });
  }
};
