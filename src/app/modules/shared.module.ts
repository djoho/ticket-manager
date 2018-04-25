import {NgModule} from '@angular/core';
import {RequireFalseDirective} from '../directives/require-false.directive';
import {MaxDirective} from '../directives/max.directive';
import {MinDirective} from '../directives/min.directive';
import {ErrorComponent} from '../components/error/error.component';
import {CommonModule} from '@angular/common';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        RequireFalseDirective,
        MaxDirective,
        MinDirective,
        ErrorComponent
    ],
    declarations: [
        RequireFalseDirective,
        MaxDirective,
        MinDirective,
        ErrorComponent
    ],
    providers: [],
})
export class SharedModule {
}
