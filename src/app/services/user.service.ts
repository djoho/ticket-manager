import {Injectable} from '@angular/core';
import {UserState} from './user-state.service';

@Injectable()
export class UserService {

    constructor(private userState: UserState) {
    }

}
