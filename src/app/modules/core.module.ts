import {NgModule} from '@angular/core';
import {UserService} from '../services/user.service';
import {TicketService} from '../services/ticket.service';
import {UserState} from '../services/user-state.service';
import {AuthGuard} from '../services/auth-guard.service';
import {BoardMessageService} from '../services/board-message.service';

@NgModule({
    imports: [],
    exports: [],
    declarations: [],
    providers: [
        UserState,
        UserService,
        TicketService,
        AuthGuard,
        BoardMessageService
    ]
})
export class CoreModule {
}
