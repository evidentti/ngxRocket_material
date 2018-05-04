import { Component, OnInit, OnDestroy, AfterContentInit, AfterViewInit } from '@angular/core';

import { environment } from '@env/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy, AfterContentInit, AfterViewInit {

  version: string = environment.version;
  clicked = 'none';
  text = 'none';

  constructor() {
    console.log('AboutComponent: constructor');
  }

  ngOnInit() {
    console.log('AboutComponent: init');
  }

  ngAfterContentInit() {
    console.log('AboutComponent: after content init');
  }

  ngAfterViewInit() {
    console.log('AboutComponent: after view init');
  }

  ngOnDestroy() {
    console.log('AboutComponent: destroy');
  }

  buttonClicked = function (msg: string) {
    console.log('AboutComponent: buttonClicked', msg);
    this.clicked = msg;
  };

}
