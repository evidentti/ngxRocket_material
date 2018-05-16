import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Logger } from '@app/core';

const log = new Logger('UserService');

export interface UserContext {
  name: string;
  email: string;
  phone: string;
  loggedIn: boolean;
}

@Injectable()
export class UserService {
  user: UserContext;

  constructor() {
    log.debug('constructor');
  }

  getUser(): Observable<UserContext> {
    log.debug('getUser');
    return Observable.of(this.user);
  }

  setUser(user: UserContext): Observable<UserContext> {
    log.debug('setUser');
    this.user = user;
    return Observable.of(this.user);
  }
}
