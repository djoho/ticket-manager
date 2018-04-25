import {Routes} from '@angular/router';
import {TicketOverviewComponent} from './pages/ticket/ticket-overview/ticket-overview.component';
import {LoginComponent} from './pages/login/login.component';
import {AddEditTicketComponent} from './pages/ticket/add-edit-ticket/add-edit-ticket.component';
import {ViewTicketComponent} from './pages/ticket/view-ticket/view-ticket.component';
import {AuthGuard} from './services/auth-guard.service';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: TicketOverviewComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'add',
        component: AddEditTicketComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'edit/:id',
        component: AddEditTicketComponent
    },
    {
        path: 'view',
        component: ViewTicketComponent
    },
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];

export {routes};
