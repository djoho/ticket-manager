import {NgModule} from '@angular/core';
import {RequireFalseDirective} from '../directives/require-false.directive';
import {MaxDirective} from '../directives/max.directive';
import {MinDirective} from '../directives/min.directive';

@NgModule({
    imports: [],
    exports: [
        RequireFalseDirective,
        MaxDirective,
        MinDirective
    ],
    declarations: [
        RequireFalseDirective,
        MaxDirective,
        MinDirective
    ],
    providers: [],
})
export class SharedModule {
}
