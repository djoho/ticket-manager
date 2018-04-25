import {Injectable} from '@angular/core';
import {UserInterface} from '../interfaces/user.interface';

@Injectable()
export class UserState {
    public isLoggedIn: boolean = false;
    public user: any;

    constructor() {
    }

    public setUser(user: UserInterface) {
        if (user) {
            this.user = user;
            this.isLoggedIn = true;
        } else {
            this.user = null;
            this.isLoggedIn = false;
        }
    }
}
