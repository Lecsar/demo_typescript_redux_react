import React from 'react';
import { connect } from 'react-redux';
import { AppState } from 'store';
import { createSelector } from 'reselect';
import { TypeOfConnect } from 'typings';
import { Grid } from '@material-ui/core';
import { Field } from '../components/Field';
import { setFieldsState } from '../helpers';

const getForm = (state: AppState) => state.form;

const getFields = createSelector(
  [getForm],
  setFieldsState
);

const mapStateToProps = (state: AppState) => ({ fields: getFields(state) });

const enhanceStore = connect(mapStateToProps);

type FormFieldsProps = TypeOfConnect<typeof enhanceStore>;

export const FormFieldsBase = ({ fields }: FormFieldsProps) => {
  return (
    <Grid container direction="row" wrap="wrap" spacing={2}>
      {fields.map(field => (
        <Field key={field._id} {...(field as any)} />
      ))}
    </Grid>
  );
};

export const FormFields = enhanceStore(FormFieldsBase);
