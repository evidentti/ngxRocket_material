import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { SaunatakkiService } from './saunatakki.service';

describe('SaunatakkiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [SaunatakkiService]
    });
  });

  it('should be created', inject([SaunatakkiService], (service: SaunatakkiService) => {
    expect(service).toBeTruthy();
  }));
});
