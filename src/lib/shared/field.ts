import { ControlType, TextboxType } from "./constants";

export interface FieldBase {
  controlType: ControlType;
  key: string;
  label: string;
  width: string;
  required: boolean;
  value: any | undefined;
  options?: { key: string, value: string }[];
}

export class TextboxField implements FieldBase {
  controlType: ControlType = "textbox"
  key: string;
  label: string;
  width: string;
  required: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
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
    this.min = options.min;
    this.max = options.max;
    this.width = options.width || '';
    this.type = options.type || 'text';
  }
}

export class DropdownField implements FieldBase {
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

export class CheckboxField implements FieldBase {
  controlType: ControlType = "checkbox";
  key: string;
  label: string;
  width: string;
  required: boolean;
  requiredTrue?: boolean;
  value: boolean | undefined;

  constructor(options: {
    key?: string;
    value?: boolean;
    label?: string;
    required?: boolean;
    requiredTrue?: boolean;
    width?: string;
  } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.requiredTrue = !!options.requiredTrue;
    this.width = options.width || '';
  }
}

export class RadioField implements FieldBase {
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

export class DatepickerField implements FieldBase {
  controlType: ControlType = "datepicker"
  key: string;
  label: string;
  width: string;
  required: boolean;
  min?: Date;
  max?: Date;
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
    this.min = options.min;
    this.max = options.max;
    this.width = options.width || '';
  }
}
