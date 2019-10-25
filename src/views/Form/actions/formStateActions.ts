import { SET_ACTIVE_TAB_ID } from '../const';

export const setActiveTabId = (activeTabId: string) => ({
  type: SET_ACTIVE_TAB_ID,
  activeTabId
});
