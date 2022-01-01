import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { distinctUntilChanged, map, takeUntil } from 'rxjs/operators';
import { ControlType } from '../../shared/constants';
import { DropdownField, FieldBase, RadioField } from '../../shared/field';
import { FormBuilderService } from '../form-builder.service';
import { FieldSettingsValidators } from './field-settings.validators';

export interface FieldSettingsOptions {
  controlType: ControlType,
  index?: number | null,
  fieldToEdit?: FieldBase | null
}

@Component({
  selector: 'app-field-settings',
  templateUrl: './field-settings.component.html',
  styleUrls: ['./field-settings.component.scss'],
})
export class FieldSettingsComponent implements OnInit, OnDestroy {
  controlType!: ControlType;
  form!: FormGroup;
  edit = false;
  private unsubscribeAll$ = new Subject<void>();
  constructor(
    private fb: FormBuilder,
    private fbs: FormBuilderService,
    @Inject(MAT_DIALOG_DATA) private data: FieldSettingsOptions,
  ) { }

  get f() {
    return this.form.controls;
  }

  ngOnInit(): void {
    if (!this.data?.controlType) {
      throw new Error('controlType cannot be null');
    }
    this.controlType = this.data.controlType;
    this.initForm();
    this.checkIfEdit();
  }

  ngOnDestroy(): void {
    this.unsubscribeAll$.next();
    this.unsubscribeAll$.complete();
  }

  checkIfEdit() {
    if (this.data.fieldToEdit) {
      this.form.patchValue(this.data.fieldToEdit);
      if (this.data.fieldToEdit.options?.length) {
        let optionsArr = new FormArray(
          this.data.fieldToEdit.options.map(opt => new FormGroup({
            key: new FormControl(opt.key),
            value: new FormControl(opt.value),
          }))
        );
        this.form.setControl('options', optionsArr);
      }
      this.edit = true;
    }
  }

  onSubmit(event: Event) {
    event.preventDefault();
    if (this.form.invalid) return;
    if (this.edit) {
      this.fbs.editField(this.form.getRawValue(), this.data.index ?? null);
    }
    else {
      this.fbs.createNewField(this.form.getRawValue());
    }
  }

  private initForm() {
    this.form = this.fb.group({
      controlType: [this.controlType, Validators.required],
      key: ['', Validators.required],
      label: ['', Validators.required],
      type: ['text'],
      options: this.fb.array([]),
      value: [''],
      width: ['100%', Validators.required],
      required: [false],
      minLength: [null],
      maxLength: [null],
      min: [null],
      max: [null],
      hasMinLength: [false],
      hasMaxLength: [false],
      hasMin: [false],
      hasMax: [false],
    }, {
      validators: [FieldSettingsValidators.customValidators()]
    });

    this.form.get('minLength')?.disable();
    this.form.get('maxLength')?.disable();
    this.form.get('min')?.disable();
    this.form.get('max')?.disable();

    this.form.get('hasMinLength')?.valueChanges
      .pipe(
        takeUntil(this.unsubscribeAll$),
        distinctUntilChanged(),
        map(p => p as boolean)
      ).subscribe(hasMinLength => {
        if (hasMinLength) {
          this.form.get('minLength')?.enable();
        } else {
          this.form.get('minLength')?.setValue('');
          this.form.get('minLength')?.disable();
        }
      });

    this.form.get('hasMaxLength')?.valueChanges
      .pipe(
        takeUntil(this.unsubscribeAll$),
        distinctUntilChanged(),
        map(p => p as boolean)
      ).subscribe(hasMaxLength => {
        if (hasMaxLength) {
          this.form.get('maxLength')?.enable();
        } else {
          this.form.get('maxLength')?.setValue('');
          this.form.get('maxLength')?.disable();
        }
      });

    this.form.get('hasMin')?.valueChanges
      .pipe(
        takeUntil(this.unsubscribeAll$),
        distinctUntilChanged(),
        map(p => p as boolean)
      ).subscribe(hasMin => {
        if (hasMin) {
          this.form.get('min')?.enable();
        } else {
          this.form.get('min')?.setValue('');
          this.form.get('min')?.disable();
        }
      });

    this.form.get('hasMax')?.valueChanges
      .pipe(
        takeUntil(this.unsubscribeAll$),
        distinctUntilChanged(),
        map(p => p as boolean)
      ).subscribe(hasMax => {
        if (hasMax) {
          this.form.get('max')?.enable();
        } else {
          this.form.get('max')?.setValue('');
          this.form.get('max')?.disable();
        }
      });
  }
}
