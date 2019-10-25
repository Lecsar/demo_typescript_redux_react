import { api } from 'api';
import { LOAD_TEMPLATES } from '../const';

export const loadTemplatesList = () => ({
  asyncType: LOAD_TEMPLATES,
  callAPI: api.getTemplatesList
});
