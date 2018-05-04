import { Component, OnInit, OnDestroy, AfterContentInit, AfterViewInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { SaunatakkiService } from './../saunatakki/saunatakki.service';
import { Logger } from '@app/core';

import { environment } from '@env/environment';

const log = new Logger('AboutComponent');

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy, AfterContentInit, AfterViewInit {

  version: string = environment.version;
  clicked = 'none';
  text = 'none';

  constructor(breakpointObserver: BreakpointObserver, private saunatakkiService: SaunatakkiService) {
    log.debug('constructor');

    breakpointObserver.observe([Breakpoints.HandsetLandscape, Breakpoints.HandsetPortrait]).subscribe(result => {
      log.debug('breakpointObserver', result);
    });
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

  buttonClicked = function (msg: string) {
    log.debug('buttonClicked', msg);
    this.clicked = msg;
  };

}
