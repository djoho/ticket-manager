import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'break'
})
export class BreakPipe implements PipeTransform {

    transform(value: any, args?: any): any {
        console.log(value);
        if (typeof value === 'string') {
            return value.replace(/\n/g, '<br>');
        } else {
            return null;
        }
    }

}
