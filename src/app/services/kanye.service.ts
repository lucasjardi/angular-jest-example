import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KanyeService {

  constructor(private httpClient: HttpClient) {
  }

  getQuote(): Observable<{ quote: string }> {
    return this.httpClient.get<{ quote: string }>('https://api.kanye.rest/');
  }
}
