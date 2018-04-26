import {NgModule} from '@angular/core';
import {RequireFalseDirective} from '../directives/require-false.directive';
import {MaxDirective} from '../directives/max.directive';
import {MinDirective} from '../directives/min.directive';
import {ErrorComponent} from '../components/error/error.component';
import {CommonModule} from '@angular/common';
import {BreakPipe} from '../pipes/break.pipe';
import {SearchTicketComponent} from '../components/search-ticket/search-ticket.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
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
