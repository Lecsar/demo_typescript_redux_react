import {
  SET_ACTIVE_TAB_ID,
  SET_FIELD_VALUE,
  VALIDATE_FIELD,
  LOAD_TEMPLATE,
  SAVE_FILE,
  DELETE_FILE,
  SAVE_TAB_DATA,
  VALIDATE_TAB_FIELDS
} from '../const';
import { FileData, TabFormData } from './formDataTypings';

export interface SetActiveTabData {
  activeTabId: string;
}

export interface SetFieldValueData {
  fieldId: string;
  value: string;
}

export interface ValidateFieldData {
  fieldId: string;
}

export interface SaveFileRequestData {
  fieldId: string;
  filesData: FileData[];
}

export interface SaveFileSuccessData {
  fieldId: string;
  response: FileData[];
}

export interface SaveFileErrorData {
  error: boolean;
  fieldId: string;
  filesData: FileData[];
}

export interface LoadTemplateSuccessData {
  response: {
    activeTabId: string;
    tabs: TabFormData[];
    templateName: string;
  };
  templateId: string;
}

export interface DeleteFileRequestData {
  fieldId: string;
  fileId: string;
}

export interface DeleteFileSuccessData {
  fieldId: string;
  fileId: string;
}

export interface DeleteFileErrorData {
  fieldId: string;
  fileId: string;
}

export type FormActionName =
  | typeof SET_ACTIVE_TAB_ID
  | typeof SET_FIELD_VALUE
  | typeof VALIDATE_FIELD
  | typeof VALIDATE_TAB_FIELDS
  | typeof LOAD_TEMPLATE
  | typeof SAVE_TAB_DATA
  | typeof SAVE_FILE
  | typeof DELETE_FILE;
