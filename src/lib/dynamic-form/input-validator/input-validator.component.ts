import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldBase } from '../../shared/field';

@Component({
  selector: 'input-validator',
  templateUrl: './input-validator.component.html',
  styleUrls: ['./input-validator.component.scss']
})
export class InputValidatorComponent {
  @Input() form!: FormGroup;
  @Input() field!: FieldBase;
  constructor() { }

  get control() {
    return this.form.controls[this.field.key];
  }

  get isInvalid() {
    return this.control.touched && this.control.invalid;
  }
}
