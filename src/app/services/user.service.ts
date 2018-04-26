import {Injectable} from '@angular/core';
import {UserState} from './user-state.service';
import {UserInterface} from '../interfaces/user.interface';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/do';

interface AuthAnswer {
    user: UserInterface;
    token: string;
}

@Injectable()
export class UserService {

    constructor(private userState: UserState,
                private httpClient: HttpClient) {
    }

    public getUsers() {
        return this.httpClient.get<UserInterface[]>('/api/user');
    }

    public getUser(userId: string) {
        return this.httpClient.get<UserInterface>('/api/user/' + userId);
    }

    public save(user: UserInterface) {
        return this.httpClient.post<UserInterface>('/api/user', user);
    }

    public update(user: UserInterface) {
        return this.httpClient.put<UserInterface>('/api/user/' + user._id, user);
    }

    public delete(user: UserInterface) {
        return this.httpClient.delete<UserInterface>('/api/user/' + user._id);
    }

    public login(val: { email: string, password: string }) {
        // do wird vor subscribe ausgeführt. Wird in der Regel für Validierungslogik verwendet.
        return this.httpClient.post<AuthAnswer>('/api/user/login', val)
            .do(this.processAuthAnswer.bind(this));
    }

    public checkToken(token: string) {
        return this.httpClient.post<AuthAnswer>('/api/user/checkToken', {token: token})
            .do(this.processAuthAnswer.bind(this));
    }

    private processAuthAnswer(serverAnswer: AuthAnswer) {
        if (serverAnswer.user) {
            this.userState.setUser(serverAnswer.user);
            localStorage.setItem('token', serverAnswer.token);
        }
    }
}
