import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { CanvasComponent } from "./canvas/canvas.component";
import { CheckboxPreviewComponent } from "./canvas/field-preview/checkbox-preview/checkbox-preview.component";
import { DropdownPreviewComponent } from "./canvas/field-preview/dropdown-preview/dropdown-preview.component";
import { FieldBasePreviewComponent } from "./canvas/field-preview/field-base-preview/field-base-preview.component";
import { RadioPreviewComponent } from "./canvas/field-preview/radio-preview/radio-preview.component";
import { TextboxPreviewComponent } from "./canvas/field-preview/textbox-preview/textbox-preview.component";
import { FieldLibraryComponent } from "./field-library/field-library.component";
import { CheckboxSettingsComponent } from "./field-settings/checkbox-settings/checkbox-settings.component";
import { DropdownSettingsComponent } from "./field-settings/dropdown-settings/dropdown-settings.component";
import { FieldSettingsComponent } from "./field-settings/field-settings.component";
import { TextboxSettingsComponent } from "./field-settings/textbox-settings/textbox-settings.component";
import { FormBuilderComponent } from "./form-builder.component";
import { FormBuilderService } from "./form-builder.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEdit, faPlus, faTrash, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { DatepickerSettingsComponent } from "./field-settings/datepicker-settings/datepicker-settings.component";
import { DatepickerPreviewComponent } from "./canvas/field-preview/datepicker-preview/datepicker-preview.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    DragDropModule,
    MatDialogModule,
    MatCheckboxModule,
    MatButtonModule,
    MatRadioModule,
    FontAwesomeModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  declarations: [
    CanvasComponent,
    FormBuilderComponent,
    FieldLibraryComponent,
    FieldSettingsComponent,
    DropdownSettingsComponent,
    TextboxSettingsComponent,
    CheckboxSettingsComponent,
    DatepickerSettingsComponent,
    FieldBasePreviewComponent,
    TextboxPreviewComponent,
    DropdownPreviewComponent,
    CheckboxPreviewComponent,
    RadioPreviewComponent,
    DatepickerPreviewComponent,
  ],
  providers: [
    FormBuilderService,
  ],
  exports: [
    FormBuilderComponent,
  ]
})
export class FormBuilderModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faPlus,
      faEdit,
      faTrash,
      faTrashAlt,
    );
  }
}
