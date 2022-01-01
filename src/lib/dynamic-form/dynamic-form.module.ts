import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatNativeDateModule, MatOptionModule } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { CheckboxControlComponent } from "./checkbox-control/checkbox-control.component";
import { DatepickerControlComponent } from "./datepicker-control/datepicker-control.component";
import { DropdownControlComponent } from "./dropdown-control/dropdown-control.component";
import { DynamicFormComponent } from "./dynamic-form.component";
import { DynamicFormService } from "./dynamic-form.service";
import { FieldBaseControlComponent } from "./field-base-control/field-base-control.component";
import { InputValidatorComponent } from "./input-validator/input-validator.component";
import { RadioControlComponent } from "./radio-control/radio-control.component";
import { TextboxControlComponent } from "./textbox-control/textbox-control.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatCheckboxModule,
    MatButtonModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  declarations: [
    DynamicFormComponent,
    TextboxControlComponent,
    DropdownControlComponent,
    CheckboxControlComponent,
    RadioControlComponent,
    DatepickerControlComponent,
    FieldBaseControlComponent,
    InputValidatorComponent
  ], providers: [
    DynamicFormService,
  ],
  exports: [
    DynamicFormComponent,
  ],
})
export class DynamicFormModule {

}
