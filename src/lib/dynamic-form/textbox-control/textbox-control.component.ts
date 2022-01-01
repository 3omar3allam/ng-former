import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TextboxField } from '../../shared/field';

@Component({
  selector: 'app-textbox-control',
  templateUrl: './textbox-control.component.html',
  styleUrls: ['../field-base-control/field-base-control.component.scss', './textbox-control.component.scss']
})
export class TextboxControlComponent {
  @Input() field!: TextboxField;
  @Input() form!: FormGroup;
}
