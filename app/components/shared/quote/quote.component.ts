import { Component, OnInit } from '@angular/core';

import { QuoteService } from '../../../services/quote/quote.services';

@Component({
  moduleId: module.id,
  selector: 'quote',
  templateUrl: 'quote.component.html',
  styleUrls: ['quote.component.css'],
})
export class QuoteComponent implements OnInit {
  quote: string;
  quoteAuthor: string;
  errorMessage: string;

  constructor(private _quoteService: QuoteService) {}

  ngOnInit(): void {
    this._quoteService.getQuote().subscribe(res => {
      //console.log('What we got from service', res);
      this.quote = res.quoteText;
      this.quoteAuthor = res.quoteAuthor;
    });
  }
}
