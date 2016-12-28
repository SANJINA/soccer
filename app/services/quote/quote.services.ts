import { Injectable } from '@angular/core';
import { Http, Jsonp, Response } from '@angular/http';
//import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

import { Config } from '../config';

@Injectable()
export class QuoteService {
  private quoteUrl: string; //Url for the quote.

  constructor(private _jsonp: Jsonp, private _http: Http) {
    this.quoteUrl = Config.QUOTE_BASEURL;
  }

  getQuote() {
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
