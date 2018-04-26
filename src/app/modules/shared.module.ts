import {NgModule} from '@angular/core';
import {RequireFalseDirective} from '../directives/require-false.directive';
import {MaxDirective} from '../directives/max.directive';
import {MinDirective} from '../directives/min.directive';
import {ErrorComponent} from '../components/error/error.component';
import {CommonModule} from '@angular/common';
import {BreakPipe} from '../pipes/break.pipe';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        RequireFalseDirective,
        MaxDirective,
        MinDirective,
        ErrorComponent,
        BreakPipe
    ],
    declarations: [
        RequireFalseDirective,
        MaxDirective,
        MinDirective,
        ErrorComponent,
        BreakPipe
    ],
    providers: [],
})
export class SharedModule {
}
