import { Component, OnInit, OnDestroy, AfterContentInit, AfterViewInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { QuoteService } from './quote.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy, AfterContentInit, AfterViewInit {

  quote: string;
  isLoading: boolean;

  constructor(private quoteService: QuoteService) {
    console.log('HomeComponent: constructor');
  }

  ngOnInit() {
    console.log('HomeComponent: init');
    this.isLoading = true;
    this.quoteService.getRandomQuote({ category: 'dev' })
      .pipe(finalize(() => { this.isLoading = false; }))
      .subscribe((quote: string) => { this.quote = quote; });
  }

  ngAfterContentInit() {
    console.log('HomeComponent: after content init');
  }

  ngAfterViewInit() {
    console.log('HomeComponent: after view init');
  }

  ngOnDestroy() {
    console.log('HomeComponent: destroy');
  }

}
