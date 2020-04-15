import {
    AbstractControl,
    AbstractControlOptions,
    AsyncValidatorFn,
    FormGroup,
    ValidatorFn
  } from '@angular/forms';  
  /**
   * Custom FormGroup class that can be extended to build form classes
   *
   * @export
   * @class CustomFormGroup
   */
  export abstract class CustomFormGroup extends FormGroup {
    public readonly validationMessages?;
  
    constructor(
      controls: {
        [key: string]: AbstractControl;
      } = {},
      validatorOrOpts?:
        | ValidatorFn
        | ValidatorFn[]
        | AbstractControlOptions
        | null,
      asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null
    ) {
      super(controls, validatorOrOpts, asyncValidator);
    }
  }
  