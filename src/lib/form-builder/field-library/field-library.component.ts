import { Component, OnInit } from '@angular/core';
import { ControlType, CONTROL_TYPES } from '../../shared/constants';
import { FormBuilderService } from '../form-builder.service';

@Component({
  selector: 'app-field-library',
  templateUrl: './field-library.component.html',
  styleUrls: ['../form-builder.component.scss', './field-library.component.scss'],
})
export class FieldLibraryComponent implements OnInit {
  readonly list = CONTROL_TYPES;

  constructor(private fbs: FormBuilderService) { }

  ngOnInit(): void {
  }

  openSettings(controlType: ControlType) {
    this.fbs.openSettings({
      controlType
    });
  }
}
