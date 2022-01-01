import { Component, Input } from '@angular/core';
import { RadioField } from '../../../../shared/field';
import { FormBuilderService } from '../../../form-builder.service';

@Component({
  selector: 'app-radio-preview',
  templateUrl: './radio-preview.component.html',
  styleUrls: ['../field-base-preview/field-base-preview.component.scss', './radio-preview.component.scss'],
})
export class RadioPreviewComponent {
  @Input() index!: number;
  @Input() field!: RadioField;

  constructor(private fbs: FormBuilderService) {}

  editField() {
    this.fbs.openSettings({
      controlType: this.field.controlType,
      fieldToEdit: this.field,
      index: this.index,
    });
  }

  removeField() {
    this.fbs.removeField(this.index);
  }
}
