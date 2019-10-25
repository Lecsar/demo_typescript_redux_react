import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { noop } from 'lodash';
import { setFieldValue, validateField } from 'views/Form/actions';
import { ExtendedFieldData } from 'views/Form/typings';
import { TypeOfConnect } from 'typings';

const mapDispatchToProps = { setFieldValue, validateField };

const enhanceStore = connect(
  null,
  mapDispatchToProps
);

interface WithFormOptions {
  validateOnChange: boolean;
}

type WrappedComponentType = (props: ExtendedFieldData) => JSX.Element | null;

type FormComponentProps = TypeOfConnect<typeof enhanceStore> &
  ExtendedFieldData & {
    WrappedComponent: WrappedComponentType;
    withFormOptions: WithFormOptions;
  };

const defaultWithFormOptions: WithFormOptions = {
  validateOnChange: false
};

const FormComponent = ({
  WrappedComponent,
  withFormOptions: { validateOnChange },
  _id,
  validationRule,
  onChange = noop,
  onBlur = noop,
  setFieldValue,
  validateField,
  ...props
}: FormComponentProps) => {
  const onChangeWithSetValue = useCallback(
    (e: React.ChangeEvent<any>) => {
      setFieldValue(_id, e.target.value);

      onChange(e);

      if (validateOnChange) {
        validateField(_id);
      }
    },
    [_id, onChange, setFieldValue, validateField, validateOnChange]
  );

  const onBlurWithValidate = useCallback(
    (e: React.SyntheticEvent) => {
      if (validationRule) {
        validateField(_id);
      }

      onBlur(e);
    },
    [_id, validationRule, onBlur, validateField]
  );

  return (
    <WrappedComponent
      _id={_id}
      {...props}
      onChange={onChangeWithSetValue}
      onBlur={onBlurWithValidate}
    />
  );
};

const FormComponentWithStore = enhanceStore(FormComponent);

export const withForm = (
  WrappedComponent: WrappedComponentType,
  withFormOptions = defaultWithFormOptions
) => (props: ExtendedFieldData) => (
  <FormComponentWithStore
    WrappedComponent={WrappedComponent}
    withFormOptions={withFormOptions}
    {...props}
  />
);
