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


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        TicketOverviewComponent,
        DashboardComponent,
        LoginComponent,
        AddEditTicketComponent,
        ViewTicketComponent
    ],
    imports: [
        BrowserModule,
        CoreModule,
        SharedModule,
        RouterModule.forRoot(routes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
