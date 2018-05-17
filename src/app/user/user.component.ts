import { Component, OnInit, OnDestroy, AfterContentInit, AfterViewInit } from '@angular/core';
import { UserService, UserContext } from './user.service';
import { finalize } from 'rxjs/operators';
import { Logger } from '@app/core';

const log = new Logger('UserComponent');

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy, AfterContentInit, AfterViewInit {
  isLoading: boolean;
  user: UserContext;

  constructor(private userService: UserService) {
    log.debug('constructor');
  }

  ngOnInit() {
    log.debug('init');
    this.isLoading = true;
    this.userService
      .setUser({ name: 'nimi', email: 'email', phone: '123456789', loggedIn: true })
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((user: UserContext) => {
        this.user = user;
        log.debug('user =', this.user);
      });
  }

  ngAfterContentInit() {
    log.debug('after content init');
    this.isLoading = true;
    this.userService
      .getUser()
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((user: UserContext) => {
        this.user = user;
        log.debug('user =', this.user);
      });
  }

  ngAfterViewInit() {
    log.debug('after view init');
  }

  ngOnDestroy() {
    log.debug('destroy');
  }

  getErrorMessage() {
    // return this.email.hasError('required')
    //   ? 'You must enter a value'
    //   : this.email.hasError('email')
    //     ? 'Not a valid email'
    //     : '';
  }
}
