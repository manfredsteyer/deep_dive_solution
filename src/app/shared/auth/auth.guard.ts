
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private authService: AuthService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.authService.userName) {
            return true;
        }
        else {
            // this.router.navigate(['/home', {needsLogin: true}]);
            return this.router.createUrlTree(['/home', {needsLogin: true}]);
        }
    }
}
