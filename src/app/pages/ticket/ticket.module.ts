import {NgModule} from '@angular/core';
import {SharedModule} from '../../modules/shared.module';
import {TicketOverviewComponent} from './ticket-overview/ticket-overview.component';
import {AddEditTicketComponent} from './add-edit-ticket/add-edit-ticket.component';
import {ViewTicketComponent} from './view-ticket/view-ticket.component';
import {RouterModule} from '@angular/router';
import {ticketRoutes} from './ticket.routing';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(ticketRoutes)
    ],
    exports: [],
    declarations: [
        TicketOverviewComponent,
        AddEditTicketComponent,
        ViewTicketComponent,
    ],
    providers: [],
})
export class TicketModule {
}
