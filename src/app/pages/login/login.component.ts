import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {UserState} from '../../services/user-state.service';
import {Router} from '@angular/router';
import {BoardMessageService} from '../../services/board-message.service';

@Component({
    selector: 'ticket-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    public loginForm: FormGroup;

    constructor(private fb: FormBuilder,
                private userService: UserService,
                private userState: UserState,
                private router: Router,
                private boardMessageService: BoardMessageService) {
    }

    ngOnInit() {
        this.loginForm = this.fb.group({
            email: [null, Validators.required],
            password: [null, Validators.required]
        });
        let token = localStorage.getItem('token');
        if (token) {
            this.userService.checkToken(token).subscribe(() => {
                this.checkLoggedIn();
            });
        }
    }

    public submit() {
        if (this.loginForm.valid) {
            this.userService.login(this.loginForm.value).subscribe((val) => {
                this.checkLoggedIn();
            });
        }
    }

    private checkLoggedIn() {
        if (this.userState.isLoggedIn) {
            this.router.navigateByUrl('/ticket');
        } else {
            localStorage.removeItem('token');
            this.boardMessageService.addMessage('E-Mail oder Passwort ungültig', 'error', 5000);
        }
    }
}
