import { connect } from 'react-redux';
import { AppState } from 'store';
import { logout } from 'views/SignIn/actions';
import { loadTemplatesList } from '../actions';

const mapStateToProps = ({ cabinet: { templates } }: AppState) => ({
  templates
});

const mapDispatchToProps = { loadTemplatesList, logout };

export const enhanceStoreCabinet = connect(
  mapStateToProps,
  mapDispatchToProps
);
