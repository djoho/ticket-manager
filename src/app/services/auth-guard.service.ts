import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {UserService} from './user.service';
import {UserState} from './user-state.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private userService: UserService,
                private userState: UserState,
                private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (this.userState.isLoggedIn) {
            return true;
        } else if (localStorage.getItem('token')) {
            return new Promise((resolve, reject) => { // Asynchrone Antwort
                this.userService.checkToken(localStorage.getItem('token')).subscribe(val => {
                    if (this.userState.isLoggedIn === false) {
                        this.router.navigateByUrl('/login');
                    }
                    resolve(this.userState.isLoggedIn);
                });
            });
        } else {
            this.router.navigateByUrl('/login');
            return false;
        }
    }
}
