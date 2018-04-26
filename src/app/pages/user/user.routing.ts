import {Routes} from '@angular/router';
import {UserOverviewComponent} from './user-overview/user-overview.component';
import {AddEditUserComponent} from './add-edit-user/add-edit-user.component';
import {ViewUserComponent} from './view-user/view-user.component';

const userRoutes: Routes = [
    {
        path: '',
        component: UserOverviewComponent
    },
    {
        path: 'add',
        component: AddEditUserComponent
    },
    {
        path: 'edit/:id',
        component: AddEditUserComponent
    },
    {
        path: 'view/:id',
        component: ViewUserComponent
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];

export {userRoutes};
