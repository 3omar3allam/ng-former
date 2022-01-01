import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkbox-settings',
  templateUrl: './checkbox-settings.component.html',
  styleUrls: ['../field-settings.component.scss', './checkbox-settings.component.scss']
})
export class CheckboxSettingsComponent implements OnInit {
  @Input() form!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.form.get('value')?.setValue(false);
  }

}
