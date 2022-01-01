import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TEXTBOX_TYPES } from '../../../shared/constants';

@Component({
  selector: 'app-textbox-settings',
  templateUrl: './textbox-settings.component.html',
  styleUrls: ['../field-settings.component.scss', './textbox-settings.component.scss']
})
export class TextboxSettingsComponent implements OnInit {
  @Input() form!: FormGroup;
  textboxTypes = TEXTBOX_TYPES;
  constructor() { }

  get f() {
    return this.form.controls;
  }

  ngOnInit(): void {
  }

}
