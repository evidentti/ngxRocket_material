import { Component, OnInit, OnDestroy, AfterContentInit, AfterViewInit } from '@angular/core';
import { UserService, UserContext } from './user.service';
import { FormControl, Validators } from '@angular/forms';
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
  user: UserContext = { name: '', phone: '', email: '', loggedIn: false };

  name = new FormControl(this.user.name, [Validators.required]);
  email = new FormControl(this.user.email, [Validators.required, Validators.email]);
  phone = new FormControl(this.user.phone, [Validators.required, Validators.minLength(10)]);

  constructor(private userService: UserService) {
    log.debug('constructor');
  }

  ngOnInit() {
    log.debug('init');
    this.isLoading = true;
    this.userService
      .setUser({ name: 'nimi', email: 'testi@email.com', phone: '123456789', loggedIn: true })
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((user: UserContext) => {
        log.debug('user =', this.user);
        this.updateUserData(user);
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
        log.debug('user =', this.user);
        this.updateUserData(user);
      });
  }

  ngAfterViewInit() {
    log.debug('after view init');
  }

  ngOnDestroy() {
    log.debug('destroy');
  }

  updateUserData(user: UserContext) {
    log.debug('updateUserData');
    this.user = user;
    this.name.setValue(user.name);
    this.email.setValue(user.email);
    this.phone.setValue(user.phone);
    this.name.markAsTouched();
    this.email.markAsTouched();
    this.phone.markAsTouched();
  }

  getNameError() {
    log.debug('getNameError');
    let message = '';
    if (this.name.hasError('required')) {
      message = 'Nimi puuttuu';
    }
    return message;
  }

  getEmailError() {
    log.debug('getEmailError');
    let message = '';
    if (this.email.hasError('required')) {
      message = 'Sähköposti puuttuu';
    } else if (this.email.hasError('email')) {
      message = 'Sähköposti on virheellinen';
    }
    return message;
  }

  getPhoneError() {
    log.debug('getPhoneError');
    let message = '';
    if (this.phone.hasError('required')) {
      message = 'Numero puuttuu';
    } else if (this.phone.hasError('minlength')) {
      message = 'Numero on liian lyhyt';
    }
    return message;
  }
}
