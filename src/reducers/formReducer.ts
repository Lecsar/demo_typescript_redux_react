import produce from 'immer';
import { AsyncPhaseNames } from 'const';
import { ReducerData } from 'utils';
import {
  reducerValidateField,
  reducerValidateTabFields
} from 'views/Form/helpers';
import { createReducer } from 'reducers';
import {
  TabFormData,
  FormActionName,
  FileData,
  LoadTemplateSuccessData,
  SetActiveTabData,
  SetFieldValueData,
  SaveFileRequestData,
  SaveFileSuccessData,
  SaveFileErrorData,
  DeleteFileRequestData,
  DeleteFileSuccessData,
  DeleteFileErrorData
} from 'views/Form/typings';
import {
  LOAD_TEMPLATE,
  SET_ACTIVE_TAB_ID,
  SET_FIELD_VALUE,
  VALIDATE_FIELD,
  SAVE_TAB_DATA,
  SAVE_FILE,
  DELETE_FILE,
  VALIDATE_TAB_FIELDS
} from 'views/Form/const';

export interface FormReducer {
  isLoading: boolean;
  error: boolean | string;
  templateId: string;
  templateName: string;
  activeTabId: string;
  tabs: TabFormData[];
}

const initialState: FormReducer = {
  isLoading: true,
  error: false,
  templateId: '',
  templateName: '',
  activeTabId: '',
  // tabs: createTemplate(mockTemplate, null),
  tabs: []
};

const getCurrentField = (draft: FormReducer, fieldId: string) =>
  draft.tabs
    .find(item => draft.activeTabId === item._id)!
    .fields.find(({ _id }) => fieldId === _id)!;

const getFile = (draft: FormReducer, fieldId: string, fileId: string) => {
  const files = getCurrentField(draft, fieldId).value as FileData[];
  return files.find(({ _id }) => fileId === _id)!;
};

const formReducerData: ReducerData<
  FormReducer,
  FormActionName,
  AsyncPhaseNames
> = {
  [LOAD_TEMPLATE]: {
    REQUEST: s => ({ ...s, isLoading: true }),
    SUCCESS: (s, { response, templateId }: LoadTemplateSuccessData) => ({
      ...s,
      ...response,
      isLoading: false,
      templateId
    }),
    ERROR: (s, payload) => ({ ...s, error: payload.error })
  },
  [SET_ACTIVE_TAB_ID]: (s, { activeTabId }: SetActiveTabData) => ({
    ...s,
    activeTabId
  }),
  [SET_FIELD_VALUE]: (s, { fieldId, value }: SetFieldValueData) =>
    produce(s, d => {
      getCurrentField(d, fieldId).value = value;
    }),
  [VALIDATE_FIELD]: reducerValidateField,
  [VALIDATE_TAB_FIELDS]: reducerValidateTabFields,
  // [VALIDATE_ALL_FIELDS]: reducerValidateAllFields,
  // TODO
  [SAVE_TAB_DATA]: {
    REQUEST: s => ({ ...s, isLoading: true }),
    SUCCESS: s => ({ ...s, isLoading: false }),
    ERROR: s => ({ ...s, isLoading: false })
  },
  [SAVE_FILE]: {
    REQUEST: (s, { fieldId, filesData }: SaveFileRequestData) =>
      produce(s, d => {
        const currentField = getCurrentField(d, fieldId);
        const files = currentField.value as FileData[];
        currentField.value = [...files, ...filesData];
      }),
    SUCCESS: (s, { fieldId, response }: SaveFileSuccessData) =>
      produce(s, d => {
        const currentField = getCurrentField(d, fieldId);
        const files = currentField.value as FileData[];
        response.forEach(downloadedFile => {
          const savedFiledIndex = files.findIndex(
            ({ _id }) => downloadedFile._id === _id
          )!;
          files[savedFiledIndex] = {
            ...downloadedFile,
            name: files[savedFiledIndex].name,
            isLoading: false,
            error: false
          };
        });
      }),
    ERROR: (s, { fieldId, filesData, error }: SaveFileErrorData) =>
      produce(s, d => {
        const currentField = getCurrentField(d, fieldId);
        const files = currentField.value as FileData[];
        filesData.forEach(file => {
          const savedFile = files.find(({ _id }) => file._id === _id)!;
          savedFile.isLoading = false;
          savedFile.error = error;
        });
      })
  },
  [DELETE_FILE]: {
    REQUEST: (s, { fieldId, fileId }: DeleteFileRequestData) =>
      produce(s, d => {
        const file = getFile(d, fieldId, fileId);
        file.isLoading = true;
      }),
    SUCCESS: (s, { fileId, fieldId }: DeleteFileSuccessData) =>
      produce(s, d => {
        let field = getCurrentField(d, fieldId);
        const files = field.value;
        if (Array.isArray(files)) {
          field.value = files.filter(({ _id }) => fileId !== _id);
        }
      }),
    ERROR: (s, { fieldId, fileId }: DeleteFileErrorData) =>
      produce(s, d => {
        const file = getFile(d, fieldId, fileId);
        file.isLoading = false;
        file.error = true;
      })
  }
};

export const formReducer = createReducer<FormReducer, FormActionName>(
  formReducerData,
  initialState
);
