import React, { useCallback } from 'react';
import { TypeOfConnect } from 'typings';
import { Icon, IconType } from 'components';
import { Tabs, Tab, Grid, Drawer } from '@material-ui/core';
import { enhanceStoreFormTabs } from '../enhances';
import { useFormTabsStyles } from '../styles';

type FormTabsBaseProps = {
  isDrawerOpen: boolean;
  closeDrawer: (e: React.KeyboardEvent | React.MouseEvent) => void;
};

type FormTabsProps = FormTabsBaseProps &
  TypeOfConnect<typeof enhanceStoreFormTabs>;

const a11yProps = (index: number) => ({
  id: `full-width-tab-${index}`,
  'aria-controls': `full-width-tabpanel-${index}`
});

export const FormTabsBase = ({
  isDrawerOpen,
  activeTabId,
  tabs = [],
  setActiveTabId,
  closeDrawer
}: FormTabsProps) => {
  const handleChange = useCallback(
    (event: React.ChangeEvent<{}>, tabId: string) => setActiveTabId(tabId),
    [setActiveTabId]
  );

  const hasErrorOnTabs = tabs.some(i => i.error);

  const s = useFormTabsStyles();

  return (
    <Drawer anchor="top" open={isDrawerOpen} onClose={closeDrawer}>
      <Tabs
        onClick={closeDrawer}
        classes={{
          root: s.tabsPanel,
          indicator: s.indicator,
          flexContainer: s.flexContainer,
          scroller: s.scrollWrapper
        }}
        orientation="vertical"
        value={activeTabId}
        onChange={handleChange}
        textColor="primary"
        scrollButtons="auto"
        variant="fullWidth"
        aria-label="full width tabs example"
      >
        {tabs.map(({ _id, name, error }, index) => (
          <Tab
            key={_id}
            classes={{
              root: s.tab,
              wrapped: s.labelWrapped
            }}
            wrapped
            disabled={hasErrorOnTabs}
            label={
              <Grid container className={s.formTabItem} alignItems="center">
                {name}
                {error && (
                  <Icon type={IconType.error} iconClassName={s.errorIcon} />
                )}
              </Grid>
            }
            value={_id}
            {...a11yProps(index)}
          />
        ))}
      </Tabs>
    </Drawer>
  );
};

// const areEqual = (prevProps: FormTabsProps, nextProps: FormTabsProps) => {
//     const isActiveIdEqual = prevProps.activeTabId === nextProps.activeTabId;
//     const isTabsEqual =
//         prevProps.tabs.length === nextProps.tabs.length &&
//         prevProps.tabs.every((prevTab, index) => prevTab === nextProps.tabs[index]);

//     return isActiveIdEqual && isTabsEqual;
// };

// export const MemoFormTabs = memo(FormTabsBase, areEqual);

export const FormTabs = enhanceStoreFormTabs(FormTabsBase);
