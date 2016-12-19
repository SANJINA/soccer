import { Component, OnInit, HostListener } from '@angular/core';

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
  showNewQuoteButton: boolean;

  constructor(private _quoteService: QuoteService) {
    this.showNewQuoteButton = false;
  }

  ngOnInit(): void {
    this.getNewQuote();
  }

  /*
  @HostListener('mouseenter') onMouseEnter() {
    this.showNewQuoteBtn = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.showNewQuoteBtn = false;
  }
  */

  getNewQuote(): void {
    this._quoteService.getQuote().subscribe(res => {
      //console.log('What we got from service', res);
      this.quote = res.quoteText;
      this.quoteAuthor = res.quoteAuthor;
    });
  }

  showNewQuoteBtn(): void {
    this.showNewQuoteButton = true;
  }

  hideNewQuoteBtn(): void {
    this.showNewQuoteButton = false;
  }
}
