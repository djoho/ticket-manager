import {Routes} from '@angular/router';
import {TicketOverviewComponent} from './components/ticket-overview/ticket-overview.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: TicketOverviewComponent
    }
];

export {routes};
