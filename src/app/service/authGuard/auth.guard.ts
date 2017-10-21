import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('loginSession-' + sessionStorage.isLoggedIn);
    //let isLoggedin =  sessionStorage.getItem('isLoggedIn')as ;
    if (this.loginService.isLoggedIn === true) {
      return true;
    }

    this.router.navigate(['login']);
    return false;
  }
}
