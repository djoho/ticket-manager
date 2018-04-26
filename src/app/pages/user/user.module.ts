import {NgModule} from '@angular/core';
import {SharedModule} from '../../modules/shared.module';
import {UserOverviewComponent} from './user-overview/user-overview.component';
import {AddEditUserComponent} from './add-edit-user/add-edit-user.component';
import {ViewUserComponent} from './view-user/view-user.component';
import {RouterModule} from '@angular/router';
import {userRoutes} from './user.routing';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(userRoutes)
    ],
    exports: [],
    declarations: [
        UserOverviewComponent,
        AddEditUserComponent,
        ViewUserComponent
    ],
    providers: [],
})
export class UserModule {
}
