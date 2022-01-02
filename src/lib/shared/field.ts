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

export interface TextboxField extends FieldBase<any> {
  minLength?: number;
  maxLength?: number;
  min?: string;
  max?: string;
  type?: TextboxType;
}

export interface DropdownField extends FieldBase<string> {
}

export interface CheckboxField extends FieldBase<boolean> {
  requiredTrue?: boolean;
}

export interface RadioField extends FieldBase<string> {
}

export interface DatepickerField extends FieldBase<Date> {
  min?: Date;
  max?: Date;
}
