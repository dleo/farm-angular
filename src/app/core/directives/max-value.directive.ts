import {Attribute, Directive, forwardRef} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator, Validators} from '@angular/forms';

@Directive({
  selector: '[farmMaxValue][formControlName],[farmMaxValue][formControl],[farmMaxValue][ngModel]',
  providers: [{provide: NG_VALIDATORS, useExisting: forwardRef(() => MaxValueDirective), multi: true}]
})
export class MaxValueDirective implements Validator {

  constructor(@Attribute('maxValue') public maxValue: number) { }

  validate(c: AbstractControl): { [key: string]: any } {
    console.log('validando' + c.value);
    return this.maxValue ? Validators.max(this.maxValue)(c) : null;
  }
}
