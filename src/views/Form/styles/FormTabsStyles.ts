import { makeStyles } from '@material-ui/core';
import { LIGHT_PURPLE, TABLE_ROW_COLOR } from 'const';

export const useFormTabsStyles = makeStyles({
  tabsWrapper: {
    position: 'sticky'
  },

  tabsPanel: {
    maxHeight: '530px',
    minHeight: '35px',
    paddingTop: '15px'
  },

  // TODO check ability without !important
  scrollWrapper: {
    overflow: 'auto !important'
  },

  flexContainer: {},

  indicator: {
    display: 'none'
  },

  tab: {
    fontSize: '1.7rem',
    minHeight: '50px',
    paddingLeft: '30px',
    paddingBottom: '5px',
    minWidth: 60,
    height: '100%',
    wordWrap: 'break-word',
    flex: 1,
    overflowWrap: 'break-word',
    textAlign: 'left',
    '&:hover': {
      backgroundColor: LIGHT_PURPLE
    },
    '&:nth-child(odd)': {
      backgroundColor: TABLE_ROW_COLOR
    }
  },

  labelWrapped: {
    flexWrap: 'nowrap'
  },

  errorIcon: {
    fontSize: '1.8rem',
    marginTop: '-1.5rem',
    marginLeft: '.5rem'
  },

  formTabItem: {
    fontSize: '1.3rem',
    maxHeight: 20,
    flexWrap: 'nowrap'
  }
});
