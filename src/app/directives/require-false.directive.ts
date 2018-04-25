import {Directive, forwardRef} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';

@Directive({
    selector: '[ticketRequireFalse][ngModel]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => RequireFalseDirective),
            multi: true
        }
    ]
})
export class RequireFalseDirective implements Validator {

    constructor() {
    }

    registerOnValidatorChange(fn: () => void): void {
    }

    validate(c: AbstractControl): ValidationErrors | null {
        console.log(c.value);
        if (c.value === false) {
            return null;
        } else {
            return {
                requireFalse: {
                    message: 'Has to be false, but ' + c.value + ' given'
                }
            };
        }
    }
}
