import { Component, Input } from '@angular/core';
import { DatepickerField } from '../../../../shared/field';
import { FormBuilderService } from '../../../form-builder.service';

@Component({
  selector: 'app-datepicker-preview',
  templateUrl: './datepicker-preview.component.html',
  styleUrls: ['../field-base-preview/field-base-preview.component.scss', './datepicker-preview.component.scss'],
})
export class DatepickerPreviewComponent {
  @Input() index!: number;
  @Input() field!: DatepickerField;

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
