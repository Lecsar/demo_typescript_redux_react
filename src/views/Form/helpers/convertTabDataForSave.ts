import { FieldDataSaveAll } from '../typings';
import { TabDataForSave } from 'api/apiTypings';

// export const convertTabDataForSave = (
//     templateId: string,
//     tabId: string,
//     fields: Array<Pick<ExtendedFieldData, '_id' | 'value' | 'error'>>,
// ) => {
//     const tabDataForSave = {templateId, data: {[tabId]: {}}} as TabDataForSave;

//     fields.forEach(({_id, value}) => {
//         if (!Array.isArray(value)) {
//             tabDataForSave.data[tabId][_id] = value;
//         }
//     });

//     return tabDataForSave;
// };

//TODO: typing value
const arrayToObject = (arr: any, keyField: any, valueField: any) =>
  Object.assign(
    {},
    ...arr.map((item: any) => ({ [item[keyField]]: item[valueField] }))
  );

export const convertTabDataForSave = (
  templateId: string,
  tabId: string,
  fields: Array<Pick<FieldDataSaveAll, 'tabIndex' | 'itemFields' | 'error'>>
) => {
  const tabDataForSave = {
    templateId,
    data: {}
  } as TabDataForSave;
  fields.forEach(({ tabIndex, itemFields }) => {
    tabDataForSave.data[tabIndex] = arrayToObject(itemFields, '_id', 'value');

    // itemFields.forEach(({ _id, value }) => {
    //   if (!Array.isArray(value)) {
    //     debugger;
    //   }
    // });
  });
  return tabDataForSave;
};
