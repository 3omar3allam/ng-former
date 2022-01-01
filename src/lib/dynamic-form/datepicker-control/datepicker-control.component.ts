import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DatepickerField } from '../../shared/field';

@Component({
  selector: 'app-datepicker-control',
  templateUrl: './datepicker-control.component.html',
  styleUrls: ['../field-base-control/field-base-control.component.scss', './datepicker-control.component.scss']
})
export class DatepickerControlComponent {
  @Input() field!: DatepickerField;
  @Input() form!: FormGroup;
}
