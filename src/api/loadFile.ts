import { Dispatch } from 'redux';
import { API_ADRESS } from 'const';

interface LoadFileData {
  _id: string;
  templateId: string;
  tabId: string;
  fieldId: string;
  file: File;
  [key: string]: any;
}

export const loadFile = (
  [successActionType, errorActionType]: any,
  dispatch: Dispatch
) => (file: LoadFileData) => {
  const body = new FormData();

  Object.keys(file).forEach(key => body.append(key, file[key]));

  fetch(`${API_ADRESS}/files`, {
    method: 'POST',
    body
  })
    .then(res => res.json())
    .then(() => {
      dispatch({
        type: successActionType,
        fieldId: file.fieldId,
        fileId: file._id
      });
    })
    .catch(error => {
      console.error(error);
      dispatch({
        type: errorActionType,
        fieldId: file.fieldId,
        fileId: file._id,
        error
      });
    });
};
