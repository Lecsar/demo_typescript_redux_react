import produce from 'immer';
import { FormReducer } from 'reducers';
import { compose, find } from 'ramda';
import {
  ValidationType,
  ValidationRule,
  ValidateFieldData
} from 'views/Form/typings';
import { isNaN } from 'lodash';
import { getFields, findTab, findField } from '../getters';

export const checkOnValidateRules = <T>(
  value: T,
  validationRule?: ValidationRule
) => {
  if (!validationRule) {
    return false;
  }

  if (validationRule.required && !value) {
    return 'Это поле обязательно для заполнения';
  }

  switch (validationRule.type) {
    case ValidationType.number:
      if (isNaN(+value)) {
        return 'Значение должно быть числом';
      }
      break;
  }

  return false;
};

export const reducerValidateField = (
  state: FormReducer,
  { fieldId }: ValidateFieldData
) =>
  produce(state, ({ activeTabId, tabs }) => {
    const currentField = compose(
      find(findField(fieldId)),
      getFields,
      find(findTab(activeTabId))
    )(tabs)!;

    currentField.error = checkOnValidateRules(
      currentField.value,
      currentField.validationRule
    );
  });

export const reducerValidateTabFields = (state: FormReducer) =>
  produce(state, ({ activeTabId, tabs }) => {
    const currentFields = compose(
      getFields,
      find(findTab(activeTabId))
    )(tabs)!;

    currentFields.forEach(currentField => {
      currentField.error = checkOnValidateRules(
        currentField.value,
        currentField.validationRule
      );
    });
  });

export const reducerValidateAllFields = (state: FormReducer) =>
  produce(state, ({ tabs }) => {
    tabs.forEach(({ fields }) =>
      fields.forEach(field => {
        const { value, validationRule } = field;

        // не валидировать массив файлов
        if (!Array.isArray(value)) {
          field.error = checkOnValidateRules(value, validationRule);
        }
      })
    );
  });
