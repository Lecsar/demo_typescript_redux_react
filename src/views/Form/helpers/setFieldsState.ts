import { FormReducer } from 'reducers';
import { ExtendedFieldData } from '../typings';

export const setFieldsState = (formState: FormReducer) =>
  formState.activeTabId
    ? formState.tabs
        .find(({ _id }) => formState.activeTabId === _id)!
        .fields.reduce(
          (acc, { shouldRender, shouldDisabled, ...field }) => {
            if (!shouldRender || shouldRender(formState)) {
              return [
                ...acc,
                {
                  ...field,
                  disabled: Boolean(shouldDisabled && shouldDisabled(formState))
                }
              ];
            }

            return acc;
          },
          [] as Omit<ExtendedFieldData, 'shouldRender' | 'shouldDisabled'>[]
        )
    : [];
