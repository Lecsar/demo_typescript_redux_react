import { connect } from 'react-redux';
import { compose, map, any } from 'ramda';
import { createSelector } from 'reselect';
import { AppState } from 'store';
import { setActiveTabId } from '../actions';
import { hasError, getTabId, getTabName, getTabFields } from '../getters';

const getError = compose(
  any(hasError),
  getTabFields
);

const getTabInfo = createSelector(
  [getTabId, getTabName, getError],
  (_id, name, error) => ({ _id, name, error })
);

const mapStateToProps = ({ form: { activeTabId, tabs } }: AppState) => ({
  activeTabId,
  tabs: map(getTabInfo, tabs)
});
const mapDispatchToProps = { setActiveTabId };

export const enhanceStoreFormTabs = connect(
  mapStateToProps,
  mapDispatchToProps
);
