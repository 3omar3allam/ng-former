import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CheckboxField } from '../../shared/field';

@Component({
  selector: 'app-checkbox-control',
  templateUrl: './checkbox-control.component.html',
  styleUrls: ['../field-base-control/field-base-control.component.scss', './checkbox-control.component.scss']
})
export class CheckboxControlComponent {
  @Input() field!: CheckboxField;
  @Input() form!: FormGroup;
}
