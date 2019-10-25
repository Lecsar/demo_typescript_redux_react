import { TabDataFromServer } from 'views/Form/typings';

export interface TabDataForSave {
  templateId: string;
  data: TabDataFromServer;
}

export interface FileDataForDelete {
  templateId: string;
  tabId: string;
  fieldId: string;
  _id: string;
  [x: string]: string;
}

export interface AllDataForSave extends Array<TabDataForSave> {}
