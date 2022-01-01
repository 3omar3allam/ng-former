import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatepickerField, FieldBase, TextboxField } from '../shared/field';

@Injectable()
export class DynamicFormService {
  getTestControls(): FieldBase[] {
    return [
      new TextboxField({
        type: 'text',
        key: 'firstName',
        label: 'First name',
        width: '50%',
        minLength: 4,
      }),
      new TextboxField({
        type: 'text',
        key: 'lastName',
        label: 'Last name',
        width: '50%',
      }),
      new TextboxField({
        type: 'email',
        key: 'email',
        label: 'Email',
        required: true,
        width: '100%',
      }),
      new TextboxField({
        type: 'number',
        key: 'age',
        label: 'Age',
        width: '100%',
        min: 18,
      })
    ]
  }

  toFormGroup(fields: FieldBase[]) {
    const group: any = {};

    for (let field of fields) {
      let control = new FormControl(field.value || null);
      const validators = [];
      if (field.required) {
        validators.push(Validators.required);
      }
      if (field.controlType == 'textbox') {
        const textbox = field as TextboxField;
        if (textbox.type == 'text') {
          if (textbox.minLength != null) {
            validators.push(Validators.minLength(textbox.minLength));
          }
          if (textbox.maxLength != null) {
            validators.push(Validators.maxLength(textbox.maxLength));
          }
        }
        else if (textbox.type == 'email') {
          validators.push(Validators.email);
        }
        else if (textbox.type == 'number') {
          if (textbox.min != null) {
            validators.push(Validators.min(textbox.min));
          }
          if (textbox.max != null) {
            validators.push(Validators.max(textbox.max));
          }
        }
      }
      control.setValidators(validators);
      control.updateValueAndValidity();
      group[field.key] = control;
    }
    return new FormGroup(group);
  }
}
