import { Component, OnInit, OnDestroy, AfterContentInit, AfterViewInit } from '@angular/core';

import { Logger } from '@app/core';

const log = new Logger('AuthComponent');

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit, OnDestroy, AfterContentInit, AfterViewInit {

  constructor() {
    log.debug('constructor');
  }

  ngOnInit() {
    log.debug('init');
  }

  ngAfterContentInit() {
    log.debug('after content init');
  }

  ngAfterViewInit() {
    log.debug('after view init');
  }

  ngOnDestroy() {
    log.debug('destroy');
  }

}
