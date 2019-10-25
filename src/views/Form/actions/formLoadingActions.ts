import { api, FileDataForDelete } from 'api';
import { API_ADRESS } from 'const';
import { AppState } from 'store';
import {
  convertTabDataForSave,
  createTemplate,
  SaveFileDataFormat,
  convertDataToUploadFiles
} from '../helpers';
import { FieldDataSaveAll } from '../typings';
import { LOAD_TEMPLATE, SAVE_FILE, DELETE_FILE, SAVE_TAB_DATA } from '../const';

export const loadTemplate = (templateId: string) => ({
  asyncType: LOAD_TEMPLATE,
  payload: { templateId },
  callAPI: () =>
    Promise.all([
      api.getTemplate(templateId),
      api.getTemplateData(templateId)
    ]).then(([template, templateData]) => {
      if (template && templateData) {
        const tabs = createTemplate(template.tabs, templateData.data);
        const activeTabId = tabs.length ? tabs[0]._id : '';

        return {
          templateName: template.name,
          tabs,
          activeTabId
        };
      }
    })
});

export const saveTabData = (
  fields: Array<Pick<FieldDataSaveAll, 'tabIndex' | 'itemFields' | 'error'>>
) => ({
  asyncType: SAVE_TAB_DATA,
  callAPI: ({ form: { templateId, activeTabId } }: AppState) => {
    const dataForSave = convertTabDataForSave(templateId, activeTabId, fields);
    return api.saveTabData(dataForSave);
  }
});

export const saveFiles = (dataForSave: SaveFileDataFormat) => {
  const { body, filesData } = convertDataToUploadFiles(dataForSave);

  return {
    asyncType: SAVE_FILE,
    callAPI: () =>
      fetch(`${API_ADRESS}/files`, {
        method: 'POST',
        body
      }).then(res => res.json()),
    payload: { filesData, fieldId: dataForSave.fieldId }
  };
};

export const deleteFile = (data: FileDataForDelete) => {
  const payload = { fieldId: data.fieldId, fileId: data._id };

  return {
    asyncType: DELETE_FILE,
    callAPI: () => api.deleteFile(data),
    payload
  };
};
