import {Directive, forwardRef, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, Validators} from '@angular/forms';

@Directive({
    selector: '[ticketMax][ngModel]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => MaxDirective),
        multi: true
    }]
})
export class MaxDirective implements Validator {
    @Input() ticketMax: number;

    constructor() {
    }

    registerOnValidatorChange(fn: () => void): void {
    }

    validate(c: AbstractControl): ValidationErrors | null {
        return Validators.max(this.ticketMax)(c);
    }
}
