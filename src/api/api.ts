import { TemplateInfo } from 'views/Cabinet/typings';
import { toast } from 'react-toastify';
import { TemplateFromServer, TemplateData } from 'views/Form/typings';
import { API_ADRESS, RequestStatus } from 'const';
import { TabDataForSave, FileDataForDelete } from './apiTypings';
import { callAPI } from './apiFetch';

const getParams = (data: { [x: string]: string }) =>
  Object.keys(data).reduce((acc, key, index) => {
    acc += `${index ? '&' : ''}${key}=${data[key]}`;

    return acc;
  }, `?`);

class Api {
  getTemplatesList = (): Promise<TemplateInfo[]> =>
    callAPI(`${API_ADRESS}/templatesList`)
      .then(res => {
        if (res.status === RequestStatus.SUCCESS) {
          return res.json();
        }

        return Promise.reject();
      })
      .catch(error => {
        console.log('getTemplatesList: ' + error);
        toast.error('Ошибка при загрузке информационных запросов');
        console.error(error);
        return [];
      });

  getTemplate = (templateId: string): Promise<TemplateFromServer | null> =>
    callAPI(`${API_ADRESS}/templates/${templateId}`)
      .then(res => res.json())
      .catch(error => {
        console.log('getTemplate: ' + error);
        toast.error('Ошибка при загрузке темплейта');
        console.error(error);
        return null;
      });

  getTemplateData = (
    templateId: string
  ): Promise<TemplateData | { data: null }> =>
    callAPI(`${API_ADRESS}/forms/${templateId}`)
      .then(res => {
        if (res.status === RequestStatus.SUCCESS) {
          return res.json();
        }

        return { data: null };
      })
      .catch(error => {
        console.error(error);
        return { data: null };
      });

  saveTabData = (data: TabDataForSave) =>
    callAPI(`${API_ADRESS}/forms`, {
      init: {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    }).then(res => res.json());

  saveAllData = (data: TabDataForSave) =>
    callAPI(`${API_ADRESS}/forms`, {
      init: {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    }).then(res => res.json());

  deleteFile = (data: FileDataForDelete) =>
    callAPI(`${API_ADRESS}/files${getParams(data)}`, {
      init: {
        method: 'DELETE'
      }
    }).then(res => res.json());
}

export const api = new Api();
