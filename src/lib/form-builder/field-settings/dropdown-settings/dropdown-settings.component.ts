import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dropdown-settings',
  templateUrl: './dropdown-settings.component.html',
  styleUrls: ['../field-settings.component.scss', './dropdown-settings.component.scss']
})
export class DropdownSettingsComponent implements OnInit {
  @Input() form!: FormGroup;
  optionForm!: FormGroup;
  constructor(private fb: FormBuilder) { }

  get options(): FormArray {
    return this.form.get('options') as FormArray;
  }

  ngOnInit(): void {
    this.optionForm = this.fb.group({
      key: ['', Validators.required],
      value: ['', Validators.required],
    });
  }

  addOption() {
    if (this.optionForm.invalid) return;
    const {key, value} = this.optionForm.getRawValue();
    this.options.push(this.fb.group({
      key: [key, Validators.required],
      value: [value, Validators.required],
    }));
    this.optionForm.reset();
  }

  deleteOption(index: number) {
    this.options.controls.splice(index, 1);
  }
}
