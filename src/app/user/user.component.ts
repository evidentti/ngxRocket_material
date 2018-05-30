import { Component, OnInit, OnDestroy, AfterContentInit, AfterViewInit } from '@angular/core';
import { UserService, UserContext, RoleContext } from './user.service';
import { FormControl, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { Logger } from '@app/core';

const log = new Logger('UserComponent');
const hasRole = true;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy, AfterContentInit, AfterViewInit {
  isLoading: boolean;
  user: UserContext = { name: '', phone: '', email: '', isLoggedIn: false, role: null };

  name = new FormControl(this.user.name, [Validators.required]);
  email = new FormControl(this.user.email, [Validators.required, Validators.email]);
  phone = new FormControl(this.user.phone, [Validators.required, Validators.minLength(10)]);
  password = new FormControl('', [Validators.required]);

  constructor(private userService: UserService) {
    log.debug('constructor');

    this.name.valueChanges.subscribe(name => {
      log.debug('name', 'valueChanges', name);
      this.user.name = name;
    });

    this.email.valueChanges.subscribe(email => {
      log.debug('email', 'valueChanges', email);
      this.user.email = email;
    });

    this.phone.valueChanges.subscribe(phone => {
      log.debug('phone', 'valueChanges', phone);
      this.user.phone = phone;
    });
  }

  ngOnInit() {
    log.debug('init');

    if (hasRole) {
      this.isLoading = true;
      this.userService
        .setUser({
          name: 'Anssi Asiakas',
          email: 'testi@email.com',
          phone: '1234567890',
          isLoggedIn: false,
          role: { id: 12345, type: 'Customer', typeId: 1000 }
        })
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

    if (!user) {
      user = { name: '', phone: '', email: '', isLoggedIn: false, role: null };
    }
    this.user = user;
    this.name.setValue(user.name);
    this.email.setValue(user.email);
    this.phone.setValue(user.phone);
    // this.name.markAsTouched();
    // this.email.markAsTouched();
    // this.phone.markAsTouched();
    // this.password.markAsTouched();
  }

  getErrorMessage(sender: FormControl) {
    if (sender.hasError('required')) {
      return 'Tieto on pakollinen';
    } else if (sender.hasError('email')) {
      return 'Sähköposti on virheellinen';
    } else if (sender.hasError('minlength')) {
      return 'Vähintään 10 merkkiä';
    }
    return '';
  }

  keyPress(event: any, owner: FormControl) {
    log.debug('keyPress', event, owner.value);
    const pattern = /[0-9\+\-\ ]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode !== 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    } else if (event.keyCode === 32 && owner.value.split(' ', 3).length > 2) {
      event.preventDefault();
    }
  }
}
