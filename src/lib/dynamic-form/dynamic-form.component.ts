import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldBase } from '../shared/field';

import { DynamicFormService } from './dynamic-form.service';

@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
})
export class DynamicFormComponent implements OnInit {
  @Input() fields: FieldBase<any>[] | null = [];
  @Output() formSubmit = new EventEmitter<any>();
  form!: FormGroup;
  payLoad = '';

  constructor(private dfs: DynamicFormService) {}

  ngOnInit() {
    this.form = this.dfs.toFormGroup(this.fields as FieldBase<any>[]);
  }

  onSubmit() {
    debugger;
    this.formSubmit.emit(this.form.getRawValue());
  }
}
