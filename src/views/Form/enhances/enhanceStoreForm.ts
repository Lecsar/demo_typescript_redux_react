import { connect } from 'react-redux';
import { map, compose, find, findIndex, any } from 'ramda';
import { AppState } from 'store';
import {
  setActiveTabId,
  saveTabData,
  loadTemplate,
  setTabIdWithValidate,
  validateTabFields
} from '../actions';
import { logout } from 'views/SignIn/actions';
import {
  findTab,
  createFieldData,
  getAllFields,
  hasError,
  getFields
} from '../getters';

const mapStateToProps = ({
  form: { activeTabId, tabs, error, templateName }
}: AppState) => {
  const detectCurrentTab = findTab(activeTabId);

  const getCurrentFields = compose(
    getFields,
    find(detectCurrentTab)
  );

  const findCurrentTabIndex = findIndex(detectCurrentTab);

  const detectErrorsOnCurrentTab = compose(
    any(hasError),
    getCurrentFields
  );

  const getFieldsData = compose(
    map(createFieldData),
    getCurrentFields
  );

  return {
    error,
    templateName,
    tabs,
    // fieldsData: getFieldsData(tabs),
    allFieldsForSave: getAllFields(tabs),
    fieldsData: getFieldsData(tabs),
    tabIndex: findCurrentTabIndex(tabs),
    hasErrorsOnCurrentTab: detectErrorsOnCurrentTab(tabs)
  };
};

const mapDispatchToProps = {
  setActiveTabId,
  saveTabData,
  logout,
  loadTemplate,
  setTabIdWithValidate,
  validateTabFields
};

export const enhanceStoreForm = connect(
  mapStateToProps,
  mapDispatchToProps
);
