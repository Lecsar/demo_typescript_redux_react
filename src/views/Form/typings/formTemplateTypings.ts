export interface TabData {
  _id: string;
  name: string;
}

export enum FieldType {
  text = 'Text',
  select = 'Select',
  file = 'File'
}

export enum ValidationType {
  number = 'Number',
  string = 'String',
  boolean = 'Boolean'
}

export interface ValidationRule {
  required: boolean;
  type?: ValidationType;
  regExp?: RegExp;
}

export interface Option {
  _id: string;
  name: string;
  value: string;
}

export interface BaseFieldTemplate {
  _id: string;
  type: FieldType;
  label: string;
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  validationRule?: ValidationRule;
}

export interface TemplateFromServer {
  _id: string;
  name: string;
  orgId: string;
  tabs: TabTemplate[];
}

export interface InputTemplate extends BaseFieldTemplate {
  type: FieldType.text;
  placeholder: string;
}

export type SelectTemplateWithOptions = {
  type: FieldType.select;
  options: Option[];
};

export type SelectTemplateWithHandbook = {
  type: FieldType.select;
  handbookId: string;
};

export type SelectTemplate = (
  | SelectTemplateWithOptions
  | SelectTemplateWithHandbook) &
  BaseFieldTemplate;

export interface FileTemplate extends BaseFieldTemplate {
  type: FieldType.file;
}

export type FieldTemplate = InputTemplate | SelectTemplate | FileTemplate;

export interface TabTemplate {
  _id: string;
  name: string;
  fields: FieldTemplate[];
}
