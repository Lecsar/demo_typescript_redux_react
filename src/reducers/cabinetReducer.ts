import { ReducerData } from 'utils';
import { AsyncPhaseNames, RequestErrorData } from 'const';
import {
  TemplateInfo,
  CabinetReducerAction,
  SuccessLoadTemplatesData
} from 'views/Cabinet/typings';
import { createReducer } from './createRootReducer';

export interface CabinetReducer {
  isLoading: boolean;
  error: boolean | string;
  templates: TemplateInfo[];
}

const initialState: CabinetReducer = {
  isLoading: false,
  error: false,
  templates: []
};

const cabinetReducerData: ReducerData<
  CabinetReducer,
  CabinetReducerAction,
  AsyncPhaseNames
> = {
  LOAD_TEMPLATES: {
    REQUEST: state => ({ ...state, isLoading: true }),
    SUCCESS: (state, { response: templates }: SuccessLoadTemplatesData) => ({
      ...state,
      isLoading: false,
      templates
    }),
    ERROR: (state, { error }: RequestErrorData) => ({
      ...state,
      isLoading: false,
      error
    })
  }
};

export const cabinetReducer = createReducer<
  CabinetReducer,
  CabinetReducerAction
>(cabinetReducerData, initialState);
