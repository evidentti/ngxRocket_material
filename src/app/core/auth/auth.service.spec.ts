import { TestBed, inject } from '@angular/core/testing';
import { CoreModule } from '@app/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CoreModule,
      ],
      providers: [
        AuthService,
        {
          provide: Router
        }
      ]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
