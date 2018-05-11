import { Component, OnInit, OnDestroy, AfterContentInit, AfterViewInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { Logger } from '@app/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  places: Array<any>;
  times: Array<any>;

  isLinear = false;
  personFormGroup: FormGroup;

  selectedSubject: any;
  selectedPlace: any;

  constructor(private formBuilder: FormBuilder) {
    log.debug('constructor');
  }

  ngOnInit() {
    log.debug('init');
    this.subjects = new Array();
    this.subjects.push({ id: 1000, code: 'subject_1000' });
    this.subjects.push({ id: 1001, code: 'subject_1001' });
    this.subjects.push({ id: 1002, code: 'subject_1002' });
    this.subjects.push({ id: 1003, code: 'subject_1003' });
    this.subjects.push({ id: 1004, code: 'subject_1004' });
    this.subjects.push({ id: 1005, code: 'subject_1005' });

    this.places = new Array();
    this.places.push({ id: 2000, code: 'place_1000' });
    this.places.push({ id: 2001, code: 'place_1001' });
    this.places.push({ id: 2002, code: 'place_1002' });
    this.places.push({ id: 2003, code: 'place_1003' });
    this.places.push({ id: 2004, code: 'place_1004' });
    this.places.push({ id: 2005, code: 'place_1005' });

    this.times = new Array();
    this.times.push({ id: 3000, time: '2017-05-23T09:35:12.000Z', length: 60 });
    this.times.push({ id: 3001, time: '2017-05-23T09:35:12.000Z', length: 60 });
    this.times.push({ id: 3002, time: '2017-05-23T09:35:12.000Z', length: 60 });
    this.times.push({ id: 3003, time: '2017-05-23T09:35:12.000Z', length: 60 });
    this.times.push({ id: 3004, time: '2017-05-23T09:35:12.000Z', length: 60 });
    this.times.push({ id: 3005, time: '2017-05-23T09:35:12.000Z', length: 60 });
    this.times.push({ id: 3006, time: '2017-05-23T09:35:12.000Z', length: 60 });
    this.times.push({ id: 3007, time: '2017-05-23T09:35:12.000Z', length: 60 });
    this.times.push({ id: 3008, time: '2017-05-23T09:35:12.000Z', length: 60 });
    this.times.push({ id: 3009, time: '2017-05-23T09:35:12.000Z', length: 60 });
    this.times.push({ id: 3010, time: '2017-05-23T09:35:12.000Z', length: 60 });
    this.times.push({ id: 3011, time: '2017-05-23T09:35:12.000Z', length: 60 });

    this.personFormGroup = this.formBuilder.group({
      personCtrl: ['', Validators.required]
    });
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

  subjectSelected(subject: any) {
    log.debug('subjectSelected', subject, (this.selectedSubject === subject));
    this.selectedSubject = (this.selectedSubject === subject) ? undefined : subject;
  }

  placeSelected(place: any) {
    log.debug('placeSelected', place, (this.selectedPlace === place));
    this.selectedPlace = (this.selectedPlace === place) ? undefined : place;
  }

}
