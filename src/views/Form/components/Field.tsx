/* eslint-disable  react-hooks/exhaustive-deps */
import React, { memo } from 'react';
import { Grid } from '@material-ui/core';
import { Dropzone, ControlInput, ControlSelect } from 'components';
import { areEqual } from 'helpers';
import { ExtendedFieldData, FieldType } from '../typings';
import { withForm, withLoad } from '../HOC';

type FieldProps = ExtendedFieldData;

const DEFAULT_FIELD_SIZE = 12;

const InputWithForm = withForm(ControlInput);
const SelectWithForm = withForm(ControlSelect as any, {
  validateOnChange: true
});
const DropzoneWithLoad = withLoad(Dropzone);

export const FormField = ({ type, size, ...props }: FieldProps) => {
  const defineField = (type: FieldType) => {
    switch (type) {
      case FieldType.text:
      case 'Input' as any:
        return InputWithForm;
      case FieldType.select:
        return SelectWithForm;
      case FieldType.file:
        return DropzoneWithLoad;
      default:
        console.error('Неизвестный FieldType');
        return () => null;
    }
  };

  const Field = defineField(type);

  return (
    <Grid item xs={DEFAULT_FIELD_SIZE}>
      <Grid item>
        <Field {...(props as any)} />
      </Grid>
    </Grid>
  );
};

export const Field = memo(FormField, areEqual);
