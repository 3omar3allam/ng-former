import { FormArray, FormGroup, ValidationErrors } from "@angular/forms";
import { ControlType } from "../../shared/constants";

type CrossControlValidatorFn = (form: FormGroup) => ValidationErrors | null;

export class FieldSettingsValidators {
  static customValidators() : CrossControlValidatorFn {
    return (form: FormGroup) => {
      const errors : ValidationErrors = {
        optionsRequired: false,
      };

      const controlType = form.get('controlType')?.value as ControlType;
      const options = form.get('options') as FormArray;
      if ((controlType == 'dropdown' || controlType == 'radio') && !options.length) {
        errors['optionsRequired'] = true;
      }

      return Object.values(errors).some(p => p) ? errors : null;
    }
  }
}
