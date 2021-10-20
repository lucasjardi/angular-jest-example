import { Component, OnInit } from '@angular/core';

import { KanyeService } from '../../services/kanye.service';

@Component({
  selector: 'kanye-quote',
  templateUrl: './kanye-quote.component.html',
  styleUrls: ['./kanye-quote.component.css']
})
export class KanyeQuoteComponent implements OnInit {

  quote: string;
  loading: boolean;

  constructor(private kanyeService: KanyeService) {
  }

  ngOnInit(): void {
    this.fetchQuote();
  }

  fetchQuote(): void {
    this.loading = true;
    this.kanyeService.getQuote()
      .subscribe(({ quote }) => {
        this.quote = quote;
        this.loading = false;
      });
  }
}
