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
  subjects: Array<any>;

  constructor() {
    log.debug('constructor');
  }

  ngOnInit() {
    log.debug('init');
    this.subjects = new Array();
    this.subjects.push({ id: 1000, code: 'subject_1000' });
    this.subjects.push({ id: 1001, code: 'subject_1001' });
    this.subjects.push({ id: 1002, code: 'subject_1002' });
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
