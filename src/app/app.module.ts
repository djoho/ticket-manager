import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {TicketOverviewComponent} from './components/ticket-overview/ticket-overview.component';
import {SharedModule} from './modules/shared.module';
import {CoreModule} from './modules/core.module';
import {RouterModule} from '@angular/router';
import {routes} from './app.routing';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        TicketOverviewComponent
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
