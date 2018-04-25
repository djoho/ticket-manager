import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../services/user.service';
import {UserInterface} from '../../../interfaces/user.interface';
import {BoardMessageService} from '../../../services/board-message.service';

@Component({
    selector: 'ticket-user-overview',
    templateUrl: './user-overview.component.html',
    styleUrls: ['./user-overview.component.scss']
})
export class UserOverviewComponent implements OnInit {
    public users: UserInterface[];

    constructor(private userService: UserService,
                private boardMessageService: BoardMessageService) {
    }

    ngOnInit() {
        this.loadUsers();
    }

    public delete(user: UserInterface) {
        this.userService.delete(user).subscribe(() => {
            this.boardMessageService.addMessage('Benutzer ' + user.firstname + ' ' + user.lastname + ' wurde erfolgreich gelöscht');
            this.loadUsers();
        });
    }

    private loadUsers() {
        this.userService.getUsers().subscribe((users) => {
            this.users = users;
        });
    }
}
