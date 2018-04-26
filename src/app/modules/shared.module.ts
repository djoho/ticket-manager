import {NgModule} from '@angular/core';
import {RequireFalseDirective} from '../directives/require-false.directive';
import {MaxDirective} from '../directives/max.directive';
import {MinDirective} from '../directives/min.directive';
import {ErrorComponent} from '../components/error/error.component';
import {CommonModule} from '@angular/common';
import {BreakPipe} from '../pipes/break.pipe';
import {SearchTicketComponent} from '../components/search-ticket/search-ticket.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
        RequireFalseDirective,
        MaxDirective,
        MinDirective,
        ErrorComponent,
        SearchTicketComponent,
        BreakPipe
    ],
    declarations: [
        RequireFalseDirective,
        MaxDirective,
        MinDirective,
        ErrorComponent,
        SearchTicketComponent,
        BreakPipe
    ],
    providers: [],
})
export class SharedModule {
}
