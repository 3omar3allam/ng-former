import { ControlType, TextboxType } from "./constants";

export interface FieldBase<T> {
  controlType: ControlType;
  key: string;
  label: string;
  width: string;
  required: boolean;
  value: T | undefined;
  options?: { key: string, value: string }[];
}

export class TextboxField implements FieldBase<any> {
  controlType: ControlType = "textbox"
  key: string;
  label: string;
  width: string;
  required: boolean;
  minLength?: number;
  maxLength?: number;
  min?: string;
  max?: string;
  value: string | undefined;
  type?: TextboxType;
  constructor(options: {
    key?: string;
    value?: string;
    label?: string;
    required?: boolean;
    width?: string;
    type?: TextboxType;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
  } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.minLength = options.minLength;
    this.maxLength = options.maxLength;
    this.min = options.min?.toString();
    this.max = options.max?.toString();
    this.width = options.width || '';
    this.type = options.type || 'text';
  }
}

export class DropdownField implements FieldBase<string> {
  controlType: ControlType = "dropdown";
  key: string;
  label: string;
  width: string;
  required: boolean;
  value: string | undefined;
  options?: { key: string, value: string }[];

  constructor(options: {
    key?: string;
    value?: string;
    label?: string;
    required?: boolean;
    width?: string;
    options?: { key: string, value: string }[];
  } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.width = options.width || '';
    this.options = options.options || [];
  }
}

export class CheckboxField implements FieldBase<string> {
  controlType: ControlType = "checkbox";
  key: string;
  label: string;
  width: string;
  required: boolean;
  requiredTrue?: boolean;
  value: string | undefined;

  constructor(options: {
    key?: string;
    value?: boolean;
    label?: string;
    required?: boolean;
    requiredTrue?: boolean;
    width?: string;
  } = {}) {
    this.value = options.value?.toString();
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.requiredTrue = !!options.requiredTrue;
    this.width = options.width || '';
  }
}

export class RadioField implements FieldBase<string> {
  controlType: ControlType = "radio";
  key: string;
  label: string;
  width: string;
  required: boolean;
  value: string | undefined;
  options?: { key: string, value: string }[];

  constructor(options: {
    key?: string;
    value?: string;
    label?: string;
    required?: boolean;
    width?: string;
    options?: { key: string, value: string }[];
  } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.width = options.width || '';
    this.options = options.options || [];
  }
}

export class DatepickerField implements FieldBase<string> {
  controlType: ControlType = "datepicker"
  key: string;
  label: string;
  width: string;
  required: boolean;
  min?: string;
  max?: string;
  value: string | undefined;
  constructor(options: {
    key?: string;
    value?: string;
    label?: string;
    required?: boolean;
    width?: string;
    min?: Date;
    max?: Date;
  } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.min = options.min?.toDateString();
    this.max = options.max?.toDateString();
    this.width = options.width || '';
  }
}
