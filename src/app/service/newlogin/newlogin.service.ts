import { Injectable } from '@angular/core';
import { LoginService } from '../login/login.service';
import { User } from '../login/user';

@Injectable()
export class NewloginService extends LoginService {

  constructor() { super(); }

  login(user: User) {
    if (user.userName === 'SuperUser' && user.password === 'SuperUser') {
      this.isLoggedIn = true;
      return true;
    }

    return false;
  }

}
