import { TestBed, inject, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CoreModule, HttpCacheService } from '@app/core';
import { SaunatakkiService } from './saunatakki.service';

describe('SaunatakkiService', () => {
  let saunatakkiService: SaunatakkiService;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CoreModule,
        HttpClientTestingModule
      ],
      providers: [
        HttpCacheService,
        SaunatakkiService
      ]
    });
  }));

  beforeEach(inject([
    HttpCacheService,
    SaunatakkiService,
    HttpTestingController
  ], (httpCacheService: HttpCacheService,
    _saunatakkiService: SaunatakkiService,
    _httpMock: HttpTestingController) => {

      saunatakkiService = _saunatakkiService;
      httpMock = _httpMock;

      httpCacheService.cleanCache();
    }
  ));

  afterEach(() => {
    httpMock.verify();
  });

  describe('getUsers', () => {
    it('should return users', () => {
      // Arrange
      const mockSubscription = { value: 'mock response' };

      // Act
      const saunatakkiSubscription = saunatakkiService.getUsers({ key: null, username: null, password: null });

      // Assert
      saunatakkiSubscription.subscribe((value: string) => {
        expect(value).toEqual(mockSubscription.value);
      });
      httpMock.expectOne({}).flush(mockSubscription);
    });

    it('should return a string in case of error', () => {
      // Act
      const saunatakkiSubscription = saunatakkiService.getUsers({ key: null, username: null, password: null });

      // Assert
      saunatakkiSubscription.subscribe((value: string) => {
        expect(typeof value).toEqual('string');
        expect(value).toContain('Error');
      });
      httpMock.expectOne({}).flush(null, {
        status: 500,
        statusText: 'error'
      });
    });
  });

  it('should be created', inject([SaunatakkiService], (service: SaunatakkiService) => {
    expect(service).toBeTruthy();
  }));
});
