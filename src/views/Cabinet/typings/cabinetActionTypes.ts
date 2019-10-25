import { LOAD_TEMPLATES } from '../const';
import { TemplateInfo } from './cabinetDataTypings';
import { SuccessActionData } from 'const';

export interface SuccessLoadTemplatesData
  extends SuccessActionData<TemplateInfo[]> {}

export type CabinetReducerAction = typeof LOAD_TEMPLATES;
