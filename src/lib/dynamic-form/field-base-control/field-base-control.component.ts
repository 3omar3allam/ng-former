import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldBase } from '../../shared/field';

@Component({
  selector: 'app-field-base-control',
  templateUrl: './field-base-control.component.html',
  styleUrls: ['./field-base-control.component.scss']
})
export class FieldBaseControlComponent {
  @Input() field!: FieldBase<any>;
  @Input() form!: FormGroup;
}
