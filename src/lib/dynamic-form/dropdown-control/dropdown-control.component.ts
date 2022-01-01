import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DropdownField } from '../../shared/field';

@Component({
  selector: 'app-dropdown-control',
  templateUrl: './dropdown-control.component.html',
  styleUrls: ['../field-base-control/field-base-control.component.scss', './dropdown-control.component.scss']
})
export class DropdownControlComponent {
  @Input() field!: DropdownField;
  @Input() form!: FormGroup;
}
