import { Component, Input } from '@angular/core';
import { CheckboxField } from '../../../../shared/field';
import { FormBuilderService } from '../../../form-builder.service';

@Component({
  selector: 'app-checkbox-preview',
  templateUrl: './checkbox-preview.component.html',
  styleUrls: ['../field-base-preview/field-base-preview.component.scss', './checkbox-preview.component.scss'],
})
export class CheckboxPreviewComponent {
  @Input() index!: number;
  @Input() field!: CheckboxField;

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
