import {Routes} from '@angular/router';
import {AuthGuard} from '../../services/auth-guard.service';
import {TicketOverviewComponent} from './ticket-overview/ticket-overview.component';
import {AddEditTicketComponent} from './add-edit-ticket/add-edit-ticket.component';
import {ViewTicketComponent} from './view-ticket/view-ticket.component';

const ticketRoutes: Routes = [
    {
        path: '',
        component: TicketOverviewComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'add',
        component: AddEditTicketComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'edit/:id',
        component: AddEditTicketComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'view/:id',
        component: ViewTicketComponent,
        canActivate: [AuthGuard]
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];

export {ticketRoutes};
