import { Component, OnInit, OnDestroy, AfterContentInit, AfterViewInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { Logger } from '@app/core';

const log = new Logger('HomeComponent');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy, AfterContentInit, AfterViewInit {

  quote: string;
  isLoading: boolean;

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
