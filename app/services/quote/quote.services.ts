import { Injectable } from '@angular/core';
import { Http, Jsonp, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class QuoteService {
  private apikey: string;
  private quoteUrl: string;

  constructor(private _jsonp: Jsonp, private _http: Http) {
    this.apikey = '';
    this.quoteUrl = 'http://api.forismatic.com/api/1.0/';
    //console.log('QuoteServe Initialized...');
  }

  getQuote() {
    //console.log('quote service url: ' + this.quoteUrl);

    return this._jsonp.get(this.quoteUrl + '?method=getQuote&format=jsonp&jsonp=JSONP_CALLBACK&lang=en')
      .map(res => res.json())
      //.do(data => console.log('All: ' +  JSON.stringify(data)))
      .catch(this.handleError);
  }

  private handleError (error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error getting the quote..');
  }
}
