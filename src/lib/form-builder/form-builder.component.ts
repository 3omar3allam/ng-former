import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FieldBase } from '../shared/field';
import { FormBuilderService } from './form-builder.service';

@Component({
  selector: 'form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {
  fields: FieldBase<any>[] = [];
  @Output() complete = new EventEmitter<FieldBase<any>[]>();

  constructor(private fbs: FormBuilderService) { }

  ngOnInit(): void {
  }

  onFinish() {
    console.log(this.fields.map(p => this.fbs.castPerType(p)));
    this.complete.emit(this.fields.map(p => this.fbs.castPerType(p)));
  }
}
