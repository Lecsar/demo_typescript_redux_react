import { get } from 'lodash';
import { cond, equals, always, T, map, defaultTo } from 'ramda';
import {
  TabTemplate,
  FieldType,
  TabDataFromServer,
  TabFormData,
  ValidationRule,
  FieldTemplate
} from '../typings';

interface DataOptions {
  fieldType: FieldType;
  validationRule?: ValidationRule;
}

interface DataForSearchValue {
  tabId: string;
  fieldId: string;
}

const getDefaultData = cond<FieldType, '' | []>([
  [equals<FieldType>(FieldType.file), always([])],
  [T, always('')]
]);

const defaultToRequired = defaultTo<ValidationRule>({
  required: true
});

const setDataInField = (
  { tabId, fieldId }: DataForSearchValue,
  { fieldType, validationRule }: DataOptions,
  templateData: TabDataFromServer | null
) => ({
  error: false as string | false,
  validationRule: defaultToRequired(validationRule),
  value: get(templateData, [tabId, fieldId], getDefaultData(fieldType))
});

const mergeTemplateWithValue = (templateData: TabDataFromServer | null) => (
  tabId: string
) => (field: FieldTemplate) => ({
  ...field,
  ...setDataInField(
    {
      tabId,
      fieldId: field._id
    },
    {
      fieldType: field.type,
      validationRule: field.validationRule
    },
    templateData
  )
});

export const createTemplate = (
  tabs: TabTemplate[],
  templateData: TabDataFromServer | null
): TabFormData[] => {
  const mergedWithTemplate = mergeTemplateWithValue(templateData);

  return tabs.map(({ _id, name, fields }) => ({
    _id,
    name,
    fields: map(mergedWithTemplate(_id), fields)
  }));
};
