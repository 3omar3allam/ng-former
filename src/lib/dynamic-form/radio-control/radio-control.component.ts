import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RadioField } from '../../shared/field';

@Component({
  selector: 'app-radio-control',
  templateUrl: './radio-control.component.html',
  styleUrls: ['../field-base-control/field-base-control.component.scss', './radio-control.component.scss']
})
export class RadioControlComponent {
  @Input() field!: RadioField;
  @Input() form!: FormGroup;
}
