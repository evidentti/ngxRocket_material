import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  version: string = environment.version;
  clicked = 'none';
  text = 'none';

  constructor() {
    console.log('AboutComponent: constructor');
  }

  ngOnInit() {
    console.log('AboutComponent: init');
  }

  buttonClicked = function (msg: string) {
    console.log('AboutComponent: buttonClicked', msg);
    this.clicked = msg;
  };

}
