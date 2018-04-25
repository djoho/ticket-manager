import {Injectable} from '@angular/core';
import {UserState} from './user-state.service';
import {UserInterface} from '../interfaces/user.interface';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UserService {

    constructor(private userState: UserState, private httpClient: HttpClient) {
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
}
