import { Component, Input } from '@angular/core';
import { FieldBase } from '../../../../shared/field';

@Component({
  selector: 'app-field-base-preview',
  templateUrl: './field-base-preview.component.html',
  styleUrls: ['./field-base-preview.component.scss']
})
export class FieldBasePreviewComponent {
  @Input() index!: number;
  @Input() field!: FieldBase;
}
