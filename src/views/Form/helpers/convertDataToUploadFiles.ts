import uuid from 'uuid';
import { FileData } from '../typings';

export interface SaveFileDataFormat {
  templateId: string;
  tabId: string;
  fieldId: string;
  files: File[];
}

export const convertDataToUploadFiles = (dataForSave: SaveFileDataFormat) => {
  const body = new FormData();
  const dataForSaveWithId = {
    ...dataForSave,
    files: dataForSave.files.map(file => ({ _id: uuid(), file }))
  };
  const filesData: FileData[] = dataForSaveWithId.files.map(
    ({ _id, file: { name } }) => ({
      _id,
      name,
      isLoading: true,
      error: false
    })
  );

  Object.keys(dataForSaveWithId).forEach(key => {
    if (key !== 'files') {
      body.append(key, (dataForSaveWithId as any)[key]);
    } else {
      let fileIdsStr = '';
      dataForSaveWithId.files.forEach(({ _id, file }, index) => {
        body.append(`files[${index}]`, file);
        fileIdsStr += `${index ? ',' : ''}${_id}`;
      });
      body.append('_id', fileIdsStr);
    }
  });

  return { body, filesData };
};
