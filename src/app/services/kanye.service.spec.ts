import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { KanyeService } from './kanye.service';

describe('KanyeService', () => {
  let service: KanyeService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ]
    });
    service = TestBed.inject(KanyeService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getQuote', () => {
    it('should have correct url, method and response', (done) => {
      service.getQuote()
        .subscribe(res => {
          expect(request.request.method).toBe('GET');
          expect(res).toEqual({ quote: 'test' });
          done();
        });

      const request = httpMock.expectOne(req => req.url === 'https://api.kanye.rest/');
      request.flush({ quote: 'test' });
    });
  });
});