import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { noop } from 'lodash';
import { DropzoneProps } from 'components';
import { AppState } from 'store';
import { saveFiles, deleteFile } from 'views/Form/actions';
import { FileTemplate } from 'views/Form/typings';
import { TypeOfConnect } from 'typings';

const mapStateToProps = ({ form: { templateId, activeTabId } }: AppState) => ({
  templateId,
  tabId: activeTabId
});
const mapDispatchToProps = { saveFiles, deleteFile };

const enhanceStore = connect(
  mapStateToProps,
  mapDispatchToProps
);

type WrappedComponentType = (props: DropzoneProps) => JSX.Element | null;

type FormComponentProps = TypeOfConnect<typeof enhanceStore> &
  FileTemplate & { WrappedComponent: WrappedComponentType } & DropzoneProps;

const FormComponent = ({
  WrappedComponent,
  _id: fieldId,
  templateId,
  tabId,
  saveFiles,
  deleteFile,
  validationRule,
  onDrop = noop,
  ...props
}: FormComponentProps) => {
  const onDropFiles = useCallback(
    (files: File[]) => {
      saveFiles({ templateId, tabId, fieldId, files });
      onDrop(files);
    },
    [templateId, tabId, fieldId, saveFiles, onDrop]
  );

  const onDeleteFile = useCallback(
    (_id: string) => () => deleteFile({ templateId, tabId, fieldId, _id }),
    [templateId, tabId, fieldId, deleteFile]
  );

  return (
    <WrappedComponent {...props} onDrop={onDropFiles} onDelete={onDeleteFile} />
  );
};

const FormComponentWithStore = enhanceStore(FormComponent);

export const withLoad = (WrappedComponent: WrappedComponentType) => (
  props: FileTemplate
) => <FormComponentWithStore WrappedComponent={WrappedComponent} {...props} />;
