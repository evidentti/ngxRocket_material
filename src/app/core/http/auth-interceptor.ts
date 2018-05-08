import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpResponse,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
// import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/do';

import { Logger } from '../logger.service';

const log = new Logger('AuthInterceptor');

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    log.debug('intercept', req);
    const authReq: any = req.clone({ headers: req.headers.set('secure-token', '1234567890') });

    return next.handle(authReq).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        log.debug('handle event', event);
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        log.error('handle error', err);
      }
    });
  }
}
