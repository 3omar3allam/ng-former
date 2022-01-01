import { Component, Input } from '@angular/core';
import { TextboxField } from '../../../../shared/field';
import { FormBuilderService } from '../../../form-builder.service';

@Component({
  selector: 'app-textbox-preview',
  templateUrl: './textbox-preview.component.html',
  styleUrls: ['../field-base-preview/field-base-preview.component.scss', './textbox-preview.component.scss'],
})
export class TextboxPreviewComponent {
  @Input() index!: number;
  @Input() field!: TextboxField;

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
