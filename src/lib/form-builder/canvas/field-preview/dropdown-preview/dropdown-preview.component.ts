import { Component, Input } from '@angular/core';
import { DropdownField } from '../../../../shared/field';
import { FormBuilderService } from '../../../form-builder.service';

@Component({
  selector: 'app-dropdown-preview',
  templateUrl: './dropdown-preview.component.html',
  styleUrls: ['../field-base-preview/field-base-preview.component.scss', './dropdown-preview.component.scss'],
})
export class DropdownPreviewComponent {
  @Input() index!: number;
  @Input() field!: DropdownField;

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
