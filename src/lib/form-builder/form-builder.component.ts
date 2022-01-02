import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FieldBase } from '../shared/field';

@Component({
  selector: 'form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {
  fields: FieldBase<any>[] = [];
  @Output() complete = new EventEmitter<FieldBase<any>[]>();

  ngOnInit(): void {
  }

  onFinish() {
    this.complete.emit(this.fields);
  }
}
