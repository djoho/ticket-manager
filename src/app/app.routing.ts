import {Routes} from '@angular/router';
import {TicketOverviewComponent} from './pages/ticket/ticket-overview/ticket-overview.component';
import {LoginComponent} from './pages/login/login.component';
import {AddEditTicketComponent} from './pages/ticket/add-edit-ticket/add-edit-ticket.component';
import {ViewTicketComponent} from './pages/ticket/view-ticket/view-ticket.component';
import {AuthGuard} from './services/auth-guard.service';
import {AddEditUserComponent} from './pages/user/add-edit-user/add-edit-user.component';
import {ViewUserComponent} from './pages/user/view-user/view-user.component';
import {UserOverviewComponent} from './pages/user/user-overview/user-overview.component';

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
        path: 'user',
        component: UserOverviewComponent
    },
    {
        path: 'user/add',
        component: AddEditUserComponent
    },
    {
        path: 'user/edit/:id',
        component: AddEditUserComponent
    },
    {
        path: 'user/view/:id',
        component: ViewUserComponent
    },
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];

export {routes};
