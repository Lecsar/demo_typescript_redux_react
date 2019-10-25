import { makeStyles } from '@material-ui/styles';
import { DARK_GREY, BLACK, BLACK_TRANSPARENT } from 'const';

export const useDropzoneStyles = makeStyles({
  label: {
    color: BLACK,
    fontSize: '1.7rem'
  },

  dropzone: {
    width: '100%',
    minHeight: '30px',
    border: `4px dashed ${DARK_GREY}`,
    margin: '20px 0',
    padding: '5px',
    fontSize: '30px',
    boxSizing: 'border-box',
    outline: 'none'
  },

  placeholder: {
    textAlign: 'center',
    fontSize: '2rem',
    color: BLACK_TRANSPARENT
  },

  dropzoneActive: {
    borderColor: 'green'
  },

  dropzoneDisabled: {
    opacity: 0.6
  },

  dropzoneCursor: {
    cursor: 'pointer'
  }
});
