import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CompetitionsService {
  private apiToken: string;
  private url: string;

  constructor(private _http: Http) {
    this.apiToken = '59665483d6b0443b914b083cc01da336';
    this.url = 'http://api.football-data.org/v1/competitions/?season=2016';
    //console.log('CompetitionsService Initialized...' + this.url);
  }

  getQuote() {
    //console.log('competitions service url: ' + this.url);

    let headers = new Headers({ 'Accept': 'application/json' });
    headers.append('X-Auth-Token', this.apiToken);

    let options = new RequestOptions({ headers: headers });

    return this._http
      .get(this.url, options)
      .map((response: Response) => response.json())
      .do(data => console.log('All: ' +  JSON.stringify(data)))
      .catch(this.handleError);

    /*
    return this._http.post(this.quoteUrl, 'method=getQuote&format=jsonp&lang=en')
      .map((response: Response) => response.json)
      .do(data => console.log('All: ' +  JSON.stringify(data)))
      .catch(this.handleError);
      */
  }

  private handleError (error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error getting the quote..');
  }
}
