import {Component, Inject, OnInit} from '@angular/core';
import {UserInterface} from '../../../interfaces/user.interface';
import {UserService} from '../../../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {BoardMessageService} from '../../../services/board-message.service';

@Component({
    selector: 'ticket-view-user',
    templateUrl: './view-user.component.html',
    styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {
    public user: UserInterface = <any>{};

    constructor(private userService: UserService,
                private route: ActivatedRoute,
                private router: Router,
                private boardMessageService: BoardMessageService) {
    }

    ngOnInit() {
        this.route.params.subscribe((val) => {
            if (val['id']) {
                this.userService.getUser(val['id']).subscribe((user) => {
                    this.user = user;
                });
            }
        });
    }

    public delete(user: UserInterface) {
        this.userService.delete(user).subscribe(() => {
            this.boardMessageService.addMessage('Benutzer ' + this.user.firstname + ' ' + this.user.lastname + ' wurde erfolgreich gelöscht');
            this.router.navigateByUrl('/user');
        });
    }

}
