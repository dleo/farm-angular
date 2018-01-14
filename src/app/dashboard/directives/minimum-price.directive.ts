import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators } from '@angular/forms';

export function minimumPriceValidation(num: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        const isMinimum = control.value >= num;
        return isMinimum ? { 'minimumPrice': { value: control.value } } : null;
    };
}

@Directive({
    selector: '[appMinimumPrice]',
    providers: [{ provide: NG_VALIDATORS, useExisting: MinimumValidatorDirective, multi: true }]
})
export class MinimumValidatorDirective implements Validator {
    @Input() minimumPrice: number;

    validate(control: AbstractControl): { [key: string]: any } {
        return this.minimumPrice ? minimumPriceValidation(this.minimumPrice)(control)
            : null;
    }
}

