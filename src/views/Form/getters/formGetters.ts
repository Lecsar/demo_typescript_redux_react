import { FormReducer } from 'reducers';
import { cond, isNil, T, always } from 'ramda';
import { TabFormData, ExtendedFieldData } from '../typings';
import { checkOnValidateRules } from '../helpers';

export const getValidationRule = ({ validationRule }: ExtendedFieldData) =>
  validationRule;
export const getTabId = ({ _id }: TabFormData) => _id;
export const getTabName = ({ name }: TabFormData) => name;
export const getTabFields = ({ fields }: TabFormData) => fields;
export const getActiveTabId = ({ activeTabId }: FormReducer) => activeTabId;
export const getAllFields = (tabs: any) =>
  // tabs
  //   .map((item: any) => item.fields)
  //   .flat()
  //   .map((item: any) => {
  //     return { _id: item._id, error: item.error, value: item.value };
  //   });
  tabs.map((item: any) => {
    return {
      tabIndex: item._id,
      itemFields: item.fields.map((item: any) => {
        return { _id: item._id, error: item.error, value: item.value };
      })
    };
  });
export const getTabs = ({ tabs }: FormReducer) => tabs;
export const getFields = cond([
  [isNil, always([])],
  [T, getTabFields]
]) as () => ExtendedFieldData[];

export const findTab = (activeTabId: string) => ({ _id }: TabFormData) =>
  activeTabId === _id;
export const findField = (fieldId: string) => ({ _id }: ExtendedFieldData) =>
  fieldId === _id;

export const createFieldData = ({ _id, value, error }: ExtendedFieldData) => ({
  _id,
  value,
  error
});
export const getError = ({ error }: ExtendedFieldData) => error;
export const hasError = ({ error }: ExtendedFieldData) => !!error;

export const checkValidate = ({ value, validationRule }: ExtendedFieldData) =>
  !!(validationRule ? checkOnValidateRules(value, validationRule) : false);
