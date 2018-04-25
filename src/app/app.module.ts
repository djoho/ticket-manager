import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {TicketOverviewComponent} from './pages/ticket/ticket-overview/ticket-overview.component';
import {SharedModule} from './modules/shared.module';
import {CoreModule} from './modules/core.module';
import {RouterModule} from '@angular/router';
import {routes} from './app.routing';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {LoginComponent} from './pages/login/login.component';
import {AddEditTicketComponent} from './pages/ticket/add-edit-ticket/add-edit-ticket.component';
import {ViewTicketComponent} from './pages/ticket/view-ticket/view-ticket.component';
import { AddEditUserComponent } from './pages/user/add-edit-user/add-edit-user.component';
import { UserOverviewComponent } from './pages/user/user-overview/user-overview.component';
import { ViewUserComponent } from './pages/user/view-user/view-user.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BoardMessageComponent} from './board-message/board-message.component';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        TicketOverviewComponent,
        DashboardComponent,
        LoginComponent,
        AddEditTicketComponent,
        ViewTicketComponent,
        AddEditUserComponent,
        UserOverviewComponent,
        ViewUserComponent,
        BoardMessageComponent
    ],
    imports: [
        BrowserModule,
        CoreModule,
        FormsModule,
        SharedModule,
        RouterModule.forRoot(routes),
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
