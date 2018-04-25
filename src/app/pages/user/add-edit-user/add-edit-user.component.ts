import {Component, OnInit} from '@angular/core';
import {UserInterface} from '../../../interfaces/user.interface';
import {UserService} from '../../../services/user.service';
import {ActivatedRoute} from '@angular/router';
import {BoardMessageService} from '../../../services/board-message.service';

@Component({
    selector: 'ticket-add-edit-user',
    templateUrl: './add-edit-user.component.html',
    styleUrls: ['./add-edit-user.component.scss']
})
export class AddEditUserComponent implements OnInit {
    public user: UserInterface = <any>{};

    constructor(private userService: UserService,
                private route: ActivatedRoute,
                private boardMessageService: BoardMessageService) {
    }

    public submit() {
        if (this.user._id) {
            this.userService.update(this.user).subscribe((user) => {
                this.boardMessageService.addMessage('Benutzer ' + this.user.firstname + ' ' + this.user.lastname + ' wurde erfolgreich geändert');
            });
        } else {
            this.userService.save(this.user).subscribe((user) => {
                this.boardMessageService.addMessage('Benutzer ' + this.user.firstname + ' ' + this.user.lastname + ' wurde erfolgreich erstellt');
            });
        }
    }

    ngOnInit() {
        this.route.params.subscribe((val) => {
            if (val['id']) {
                this.userService.getUser(val['id']).subscribe((user) => {
                });
            }
        });
    }
}
