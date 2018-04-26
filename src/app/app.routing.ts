import {Routes} from '@angular/router';
import {LoginComponent} from './pages/login/login.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'ticket',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'ticket',
        loadChildren: 'app/pages/ticket/ticket.module#TicketModule'
    },
    {
        path: 'user',
        loadChildren: 'app/pages/user/user.module#UserModule'
    },
    {
        path: '**',
        redirectTo: 'ticket',
        pathMatch: 'full'
    }
];

export {routes};
