import { FormReducer } from 'reducers';
import { TabData, FieldTemplate } from './formTemplateTypings';

interface TabId {
  [fieldId: string]: string | FileDataFromServer[] | undefined;
}

export interface TabDataFromServer {
  [tabId: string]: TabId;
}

export interface TemplateData {
  userId: string;
  templateId: string;
  orgId: string;
  data: TabDataFromServer;
}

export interface FileDataFromServer {
  _id: string;
  author?: string;
  createAt?: string;
  updatedAt?: string;
  name: string;
  path?: string;
}

export interface FileData extends FileDataFromServer {
  isLoading?: boolean;
  error?: boolean;
}

export interface FieldData {
  value: string | FileData[];
  error: false | string;
  onChange?: (e: React.ChangeEvent<any>) => void;
  onBlur?: (e: React.SyntheticEvent) => void;
  shouldDisabled?: (state: FormReducer) => boolean;
  shouldRender?: (state: FormReducer) => boolean;
}

export interface FieldDataSaveAll {
  tabIndex: string;
  itemFields: TabsForSave[];
  error: false | string;
  onChange?: (e: React.ChangeEvent<any>) => void;
  onBlur?: (e: React.SyntheticEvent) => void;
  shouldDisabled?: (state: FormReducer) => boolean;
  shouldRender?: (state: FormReducer) => boolean;
}

export type ExtendedFieldData = FieldData & FieldTemplate;

export interface TabFormData extends TabData {
  fields: ExtendedFieldData[];
}

export interface TabsForSave {
  _id: string;
  error: string | false;
  value: string | FileData[];
}
