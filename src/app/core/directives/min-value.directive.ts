import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, Validators} from '@angular/forms';

@Directive({
  selector: '[farmMinValue]',
  providers: [{provide: NG_VALIDATORS, useExisting: MinValueDirective, multi: true}]
})
export class MinValueDirective implements Validator {

  @Input() minValue: number;

  constructor() { }

  validate(c: AbstractControl): ValidationErrors | any {
    return this.minValue ? Validators.min(this.minValue)(c) : null;
  }
}
