import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-datepicker-settings',
  templateUrl: './datepicker-settings.component.html',
  styleUrls: ['../field-settings.component.scss', './datepicker-settings.component.scss']
})
export class DatepickerSettingsComponent implements OnInit {
  @Input() form!: FormGroup;
  constructor() { }

  get f() {
    return this.form.controls;
  }

  ngOnInit(): void {
  }

}
