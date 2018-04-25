import {Directive, forwardRef, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, Validators} from '@angular/forms';
import {MaxDirective} from './max.directive';

@Directive({
    selector: '[ticketMin][ngModel]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => MinDirective),
        multi: true
    }]
})
export class MinDirective implements Validator {
    @Input() ticketMin: number;

    constructor() {
    }

    registerOnValidatorChange(fn: () => void): void {
    }

    validate(c: AbstractControl): ValidationErrors | null {
        return Validators.min(this.ticketMin)(c);
    }
}
