import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, catchError } from 'rxjs/operators';
import { Logger } from '@app/core';

const log = new Logger('SaunatakkiService');

const routes = {
  get: (c: SaunatakkiContext) => '/saunatakki/users'
};

export interface SaunatakkiContext {
  key: string;
}

@Injectable()
export class SaunatakkiService {

  constructor(private httpClient: HttpClient) {
    log.debug('constructor');
  }

  getUsers(context: SaunatakkiContext): Observable<string> {
    log.debug('getUsers', routes);
    const username = 'user';
    const password = 'password';
    const headerJson = {
      'Authorization': 'Basic ' + btoa(username + ':' + password),
      'Content-Type': 'application/json',
      'key': 'avain'
    };
    const headers = new HttpHeaders(headerJson);
    // const params = new HttpParams().set('param1', 'value1');
    return this.httpClient
      .cache()
      .get(routes.get(context), { headers: headers/*, params: params*/ })
      .pipe(
        map((body: any) => body.value),
        catchError(() => of('Error, could not load users'))
      );
  }

}
