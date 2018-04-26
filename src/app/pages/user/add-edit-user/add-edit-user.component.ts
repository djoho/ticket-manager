import {Component, OnInit} from '@angular/core';
import {UserInterface} from '../../../interfaces/user.interface';
import {UserService} from '../../../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
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

  public submit() {
    if (this.user._id) {
      this.userService.update(this.user).subscribe((user) => {
        this.boardMessageService.addMessage('Benutzer ' + user.firstname + ' ' + user.lastname + ' wurde erfolgreich geändert');
        this.router.navigateByUrl('/user/view/' + user._id);
      });
    } else {
      this.userService.save(this.user).subscribe((user) => {
        this.boardMessageService.addMessage('Benutzer ' + user.firstname + ' ' + user.lastname + ' wurde erfolgreich erstellt');
        this.router.navigateByUrl('/user/view/' + user._id);
      });
    }
  }
}
