import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, catchError } from 'rxjs/operators';
import { Logger } from '@app/core';

const log = new Logger('SaunatakkiService');

const routes = {
  get: (c: SaunatakkiContext) => `/users?data=${c.data}`
};

export interface SaunatakkiContext {
  data: string;
}

@Injectable()
export class SaunatakkiService {

  constructor(private httpClient: HttpClient) {
    log.debug('constructor');
  }

  getUsers(context: SaunatakkiContext): Observable<string> {
    log.debug('getUsers');
    return this.httpClient
      .cache()
      .get(routes.get(context))
      .pipe(
        map((body: any) => body.value),
        catchError(() => of('Error, could not load users'))
      );
  }

}
