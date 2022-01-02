import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Observable, Subject } from "rxjs";
import { map } from "rxjs/operators";
import { CheckboxField, DatepickerField, DropdownField, FieldBase, RadioField, TextboxField } from "../shared/field";
import { FieldSettingsComponent, FieldSettingsOptions } from "./field-settings/field-settings.component";

@Injectable()
export class FormBuilderService {
  private _fieldCreated$ = new Subject<FieldBase<any>>();
  private _fieldDeleted$ = new Subject<number>();
  private _editIndex!: number | null;

  constructor(
    private _dialog: MatDialog,
  ) {
    _dialog.afterAllClosed.subscribe(() => this._editIndex = null);
  }

  get fieldCreated$(): Observable<FieldWithIndex<any>> {
    return this._fieldCreated$
      .asObservable()
      .pipe(
        map(field => {
          return {
            field,
            index: this._editIndex,
          }
        })
      );
  }

  get fieldDeleted$(): Observable<number> {
    return this._fieldDeleted$.asObservable();
  }

  openSettings(options: FieldSettingsOptions) {
    this._dialog.open(FieldSettingsComponent, {
      data: options,
      maxWidth: '50%',
      maxHeight: '85%',
    });
  }

  createNewField(field: FieldBase<any>) {
    this._fieldCreated$.next(field);
    this._dialog.closeAll();
  }

  editField(field: FieldBase<any>, index: number | null) {
    this._editIndex = index;
    this._fieldCreated$.next(field);
    this._dialog.closeAll();
  }

  removeField(index: number) {
    this._fieldDeleted$.next(index);
  }

  castPerType(field: FieldBase<any>): FieldBase<any> {
    switch (field.controlType) {
      case 'textbox':
        return field as TextboxField;
      case 'dropdown':
        return field as DropdownField;
      case 'checkbox':
        return field as CheckboxField;
      case 'radio':
        return field as RadioField;
      case 'datepicker':
        return field as DatepickerField;
      default:
        throw new TypeError("unknown control type");
    }
  }
}

interface FieldWithIndex<T> {
  index: number | null,
  field: FieldBase<T>
}
